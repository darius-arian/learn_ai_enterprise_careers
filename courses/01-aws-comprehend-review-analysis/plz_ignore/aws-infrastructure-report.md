# AWS Infrastructure Report - Review Analysis System

## Overview
The system uses a fully serverless event-driven architecture to process product reviews through AWS Comprehend.

## Architecture Flow
```
S3 Upload → S3 Event Notification → SQS Queue → Lambda Function → AWS Comprehend → S3 Results
```

---

## 1. S3 Bucket Configuration

**Bucket Name:** `review-analysis-bucket-darius`  
**Region:** us-east-1

### Folder Structure
- `01-aws-comprehend-review-analysis/review-analysis-uploads/` - Input folder for uploaded review files
- `01-aws-comprehend-review-analysis/analysis-results/` - Output folder for Comprehend analysis results

### Event Notification Configuration
**Notification ID:** `review-upload-notification`  
**Trigger Event:** `s3:ObjectCreated:*` (any object creation event)  
**Target:** SQS Queue (`review-analysis-queue`)

**Filters:**
- **Prefix:** `01-aws-comprehend-review-analysis/review-analysis-uploads/`
- **Suffix:** `.json`

**How it works:** When a `.json` file is uploaded to the `review-analysis-uploads/` folder, S3 automatically sends a notification message to the SQS queue.

---

## 2. SQS Queue

**Queue Name:** `review-analysis-queue`  
**Queue URL:** `https://sqs.us-east-1.amazonaws.com/086848577583/review-analysis-queue`  
**Queue ARN:** `arn:aws:sqs:us-east-1:086848577583:review-analysis-queue`

### Configuration
- **Visibility Timeout:** 300 seconds (5 minutes)
- **Message Retention Period:** 1,209,600 seconds (14 days)
- **Maximum Message Size:** 1,048,576 bytes (1 MB)
- **Encryption:** SQS-managed SSE enabled
- **Current Messages:** 0 visible, 1 in-flight (being processed)

### Queue Policy
Allows S3 service to send messages to this queue:
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": {"Service": "s3.amazonaws.com"},
    "Action": "sqs:SendMessage",
    "Resource": "arn:aws:sqs:us-east-1:086848577583:review-analysis-queue",
    "Condition": {
      "ArnEquals": {
        "aws:SourceArn": "arn:aws:s3:::review-analysis-bucket-darius"
      }
    }
  }]
}
```

**How it works:** Acts as a buffer between S3 and Lambda. When S3 sends a notification, SQS queues it and triggers Lambda. This ensures no messages are lost during high traffic and provides retry capability.

---

## 3. Lambda Function

**Function Name:** `review-analysis-processor`  
**Function ARN:** `arn:aws:lambda:us-east-1:086848577583:function:review-analysis-processor`  
**Runtime:** Python 3.9  
**Handler:** `lambda_function.lambda_handler`

### Configuration
- **Memory:** 128 MB
- **Timeout:** 300 seconds (5 minutes)
- **Architecture:** x86_64
- **State:** Active
- **Last Modified:** 2026-02-05T15:13:41 UTC
- **Code Size:** 1,433 bytes
- **Log Group:** `/aws/lambda/review-analysis-processor`

### Event Source Mapping
**UUID:** `dc30538a-8386-4a0f-a2d4-7740ec0766bc`  
**Event Source:** SQS Queue (`review-analysis-queue`)  
**Batch Size:** 1 message at a time  
**State:** Enabled  
**Last Modified:** 2026-02-03

**How it works:** Lambda polls the SQS queue and automatically invokes the function when messages are available. Processes one message at a time.

### IAM Role
**Role Name:** `review-analysis-lambda-role`  
**Role ARN:** `arn:aws:iam::086848577583:role/review-analysis-lambda-role`

**Attached Policies:**
1. **AWSLambdaBasicExecutionRole** - CloudWatch Logs access for logging
2. **AmazonS3FullAccess** - Read from uploads folder, write to results folder
3. **AmazonSQSFullAccess** - Receive and delete messages from queue
4. **ComprehendFullAccess** - Call all AWS Comprehend APIs

**Last Used:** 2026-02-17T14:45:47 UTC (recently active)

---

## 4. Lambda Function Logic

### Input Processing
1. Receives SQS message containing S3 event notification
2. Extracts bucket name and object key from the event
3. Downloads the JSON file from S3
4. Parses JSON to extract reviews (handles multiple structures)

### AWS Comprehend Analysis (7 API Calls per Review)
For each review, the Lambda function calls:

1. **`detect_dominant_language`** - Identifies the language of the text
2. **`detect_sentiment`** - Determines overall sentiment (POSITIVE, NEGATIVE, NEUTRAL, MIXED) with confidence scores
3. **`detect_key_phrases`** - Extracts important phrases and topics
4. **`detect_entities`** - Identifies people, places, organizations, products, etc.
5. **`detect_syntax`** - Analyzes grammatical structure (parts of speech, tokens)
6. **`detect_targeted_sentiment`** - Sentiment analysis for specific entities/aspects
7. **`detect_pii_entities`** - Detects personally identifiable information

### Output Processing
1. Aggregates all Comprehend results for each review
2. Extracts timestamp from uploaded filename (e.g., `2026-02-03T17-45-51-009Z.json`)
3. Creates result filename: `analysis-{timestamp}.json`
4. Saves results to S3 `analysis-results/` folder with matching timestamp
5. Result includes:
   - Source file path
   - Processing timestamp
   - Total review count
   - Complete analysis for each review

### File Naming Convention
- **Upload:** `2026-02-03T17-45-51-009Z.json`
- **Result:** `analysis-2026-02-03T17-45-51-009Z.json`

This matching ensures the backend can easily find the corresponding result file.

---

## 5. AWS Comprehend Service

**Service:** AWS Comprehend (Natural Language Processing)  
**Region:** us-east-1  
**Language Support:** English (primary), with automatic language detection

### Capabilities Used
- **Language Detection** - Identifies language with confidence scores
- **Sentiment Analysis** - Emotion detection with granular scores
- **Key Phrase Extraction** - Topic and theme identification
- **Entity Recognition** - Named entity extraction (NER)
- **Syntax Analysis** - Grammatical structure parsing
- **Targeted Sentiment** - Aspect-based sentiment analysis
- **PII Detection** - Privacy protection and compliance

**How it works:** Pre-trained machine learning models analyze text without requiring custom training. Fully managed service with automatic scaling.

---

## Data Flow Summary

1. **User uploads file** → Frontend sends to Backend
2. **Backend uploads to S3** → `review-analysis-uploads/2026-02-03T17-45-51-009Z.json`
3. **S3 triggers notification** → Sends event to SQS queue
4. **SQS queues message** → Holds notification until Lambda is ready
5. **Lambda polls SQS** → Retrieves message and invokes function
6. **Lambda downloads file** → Reads JSON from S3
7. **Lambda calls Comprehend** → 7 API calls per review
8. **Lambda saves results** → `analysis-results/analysis-2026-02-03T17-45-51-009Z.json`
9. **Backend polls S3** → Checks for result file with matching timestamp
10. **Frontend displays results** → Charts and visualizations

---

## Key Design Decisions

### Why SQS Between S3 and Lambda?
- **Decoupling:** S3 and Lambda operate independently
- **Reliability:** Messages are persisted; no data loss if Lambda is unavailable
- **Retry Logic:** Failed processing can be retried automatically
- **Throttling Protection:** Queue buffers requests during traffic spikes

### Why Timestamp-Based Naming?
- **Uniqueness:** Every upload gets a unique identifier
- **Traceability:** Easy to match uploads with results
- **Ordering:** Chronological sorting by filename
- **No Collisions:** Multiple users can upload simultaneously

### Why Serverless Architecture?
- **Cost Efficiency:** Pay only when processing files (no idle servers)
- **Auto Scaling:** Handles 1 or 1000 requests automatically
- **No Maintenance:** AWS manages infrastructure
- **High Availability:** Built-in redundancy and fault tolerance

---

## Current Status
✅ All infrastructure is deployed and operational  
✅ Lambda function is active and processing messages  
✅ S3 event notifications are configured correctly  
✅ SQS queue is receiving and delivering messages  
✅ IAM permissions are properly configured  
✅ Comprehend API calls are functioning  

**Last Activity:** Lambda was last used on 2026-02-17 at 14:45:47 UTC
