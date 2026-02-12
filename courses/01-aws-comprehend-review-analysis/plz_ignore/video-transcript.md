# Episode 1: AWS Comprehend Review Analysis - Video Transcript

## Demo

<span style="color: #166534">[Show Amazon product page with hundreds of reviews]</span>

Imagine analyzing thousands of product reviews like these... in seconds. That's exactly what we built. You upload your reviews, AWS Comprehend instantly detects sentiment, extracts key insights, identifies entities - all powered by AI. Let me show you.

<span style="color: #166534">[Open browser to localhost:5173]</span>

Here's the upload interface.

<span style="color: #166534">[Show the upload interface with drag-and-drop area]</span>

Let's upload some iPhone reviews from Canada and China.

<span style="color: #166534">[Drag and drop 1-iphone-17-reviews.json]</span>

Click Analyze to start processing.

<span style="color: #166534">[Click Analyze button, show loading state]</span>

So the file goes to our backend, gets stored in S3 - that's Amazon's cloud storage - triggers Lambda - a serverless function that runs our code - and Comprehend - AWS's AI service - analyzes each review.

<span style="color: #166534">[Wait for processing, click See Results button]</span>

Alright, results are ready.

<span style="color: #166534">[Scroll through visualizations]</span>

Language distribution - mostly English with some Chinese reviews. Comprehend automatically detects the language of each review.

Sentiment analysis - color-coded: green for positive, red for negative. This tells us how customers feel about the product.

Geographic heatmap showing sentiment by country. We can see which regions love the product... and which don't.

Key phrases - the most important topics customers mention, like battery life or camera quality.

Entity recognition - Comprehend identifies people, places, brands, products mentioned in reviews.

And there's more - syntax analysis, targeted sentiment for specific features, even PII detection to protect customer privacy.

<span style="color: #166534">[Scroll to raw JSON at bottom]</span>

Full analysis results available as JSON.

## About Author

<span style="color: #166534">[B-roll montage: Darius coding at desk, doing calisthenics/handstands, yoga poses, travel clips]</span>

I'm Darius. I've spent the last decade building enterprise systems - from software development to cloud architecture, specializing in AWS and AI integration. Currently, I'm working as an engineer at a large enterprise company here in Canada.

Outside of tech, I'm into calisthenics, yoga, and pilates. I travel whenever I can - it keeps me grounded and gives me perspective.

Here's why I'm making this content: I want to help you land a ten thousand dollar per month job in tech. That's it. No courses to sell, no paid memberships. Just real, practical skills that companies actually pay for.

**💡 ProTip:** If you're a student or looking for a job, don't go for high-risk saturated areas like influencer careers or startup dreams right away. Follow my courses, land that ten K job first, build your financial foundation. Then do whatever you want with your life. But secure the bag first.

This series will show you exactly what enterprise companies look for. Let's get you that job.

## For Whom

This course is for students and professionals targeting roles like Cloud Engineer, AWS Solutions Architect, Full-Stack Developer, DevOps Engineer, or AI ML Engineer - positions that pay ten K plus per month at enterprise companies.

## Project Overview

"Let me break down what we're building. Don't worry if some of this sounds complex right now - we'll dive deep into each piece later. Just get the big picture first."

<span style="color: #166534">[Show architecture diagram - Complete System Architecture from README]</span>

This is a full-stack, event-driven serverless application. Here's how it works:

User uploads a JSON file with product reviews through our React frontend.

<span style="color: #166534">[Overlay: S3 logo/icon]</span>

The Express backend validates the file and stores it in S3. Now, S3 is Amazon's Simple Storage Service - think of it as a massive hard drive in the cloud. It's incredibly reliable, scales automatically, and you only pay for what you use. In our project, S3 stores both the original review files and the analysis results. It's perfect for this because it can handle files of any size and integrates seamlessly with other AWS services.

<span style="color: #166534">[Overlay: SQS logo/icon]</span>

S3 automatically triggers an event that sends a message to SQS. SQS stands for Simple Queue Service - it's a message queue that acts like a buffer between services. Why do we need this? Well, imagine if a thousand users upload files at the same time. Without SQS, our Lambda function would get overwhelmed. SQS queues up these requests and processes them one by one, ensuring nothing gets lost. It's like a line at a coffee shop - everyone gets served, just in order.

<span style="color: #166534">[Overlay: Lambda logo/icon]</span>

SQS invokes our Lambda function. Lambda is AWS's serverless compute service - you write code, upload it, and AWS runs it for you. No servers to manage, no infrastructure to maintain. You only pay when your code actually runs. In our case, Lambda wakes up when there's a message in the queue, processes the review file, and goes back to sleep. If we get ten requests, ten Lambda instances spin up automatically. If we get zero requests, we pay zero dollars. That's the beauty of serverless.

<span style="color: #166534">[Overlay: Comprehend logo/icon]</span>

Lambda reads the file from S3 and calls AWS Comprehend. Comprehend is AWS's natural language processing service - it's powered by machine learning models trained on massive amounts of text data. It can understand context, detect emotions, identify entities, and extract meaning from text. For our project, Comprehend is doing the heavy lifting - analyzing sentiment, finding key phrases, detecting languages. Building this ourselves would take months and require machine learning expertise. With Comprehend, it's just an API call.

Comprehend runs seven different analyses on each review: language detection, sentiment analysis, key phrase extraction, entity recognition, syntax analysis, targeted sentiment, and PII detection.

Lambda saves the results back to S3. Now we have both the original reviews and the AI-generated insights stored in the cloud, ready to be retrieved.

Meanwhile, the frontend polls the backend asking... are the results ready yet? This is called polling - checking repeatedly until the data is available.

Once ready, the backend retrieves the analysis from S3 and sends it to the frontend.

The frontend displays everything with interactive charts and visualizations.

<span style="color: #166534">[Show Backend Architecture diagram]</span>

On the backend side, we have two API endpoints: POST for uploading files, GET for retrieving results. Multer handles file uploads, we validate everything, and the AWS SDK manages all S3 operations.

<span style="color: #166534">[Show AWS Infrastructure diagram]</span>

The AWS infrastructure is fully serverless. S3 bucket with two folders - one for uploads, one for results. Event notifications trigger SQS. Lambda has an IAM role with specific permissions. Everything is secure, scalable, and costs almost nothing when idle.

**🎯 Key Concept:** This architecture is what enterprise companies use in production. Event-driven, serverless, scalable, and cost-effective.

## Demo Details
[Walk through the iphone-17-reviews.json file:
- Show the JSON structure
- Upload the file through the UI
- Trigger analysis
- Explain each part of the analysis results:
  - Language Distribution
  - Sentiment Analysis
  - Key Phrases
  - Entity Recognition
  - Syntax Analysis
  - Targeted Sentiment
  - PII Detection
- Show visualizations and charts]

## Project Setup
[Step-by-step setup guide so students can run the project locally:
- Prerequisites: Node.js, npm, AWS account
- Install dependencies (frontend and backend)
- Configure AWS credentials (.env file)
- Set up AWS infrastructure (S3 bucket, SQS queue, Lambda function, IAM roles)
- Run frontend and backend servers
- Test the application]

## Walk Through the Whole User Request to Get Review Analysis

### Subsession: Requirement File
[Explain the JSON file structure:
- Review format
- Required fields
- Sample data structure]

### Subsession: Frontend Explanation
[Explain how the frontend works:
- React component structure
- File upload interface
- How frontend communicates with backend through API
- First API: POST /analyze - sends JSON file to backend
- Handling API responses
- Polling for results with GET /results/:expectedResultFile]

### Subsession: Backend Explanation
[Explain how the backend works:
- Express.js server listening on port 3001
- Handling incoming API requests
- Note: Usually we authenticate users, but not for this project (educational purposes)
- How backend receives the POST /analyze request
- Reading AWS credentials from .env file (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY)
- Using AWS SDK to upload JSON file to S3 bucket
- Timestamp-based file naming
- Returning expectedResultFile to frontend]

## AWS Comprehend Features
[Explain the 7 Comprehend analysis features and their use cases - to be filled]

## Conclusion
[Wrap-up, key takeaways, next episode preview - to be filled]

---

**Author**: Darius Arian  
**YouTube Channel**: https://www.youtube.com/@learn_ai_enterprise_careers  
**GitHub Repository**: https://github.com/darius-arian/learn_ai_enterprise_careers
