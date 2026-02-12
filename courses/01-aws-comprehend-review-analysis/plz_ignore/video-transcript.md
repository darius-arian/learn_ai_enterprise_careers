# Episode 1: AWS Comprehend Review Analysis - Video Transcript

## Demo

<span style="color: #166534">[Show Amazon product page with hundreds of reviews]</span>

"Imagine analyzing thousands of product reviews like these in seconds. That's exactly what we built. Upload your reviews, and AWS Comprehend instantly detects sentiment, extracts key insights, identifies entities - all powered by AI. Let me show you."

<span style="color: #166534">[Open browser to localhost:5173]</span>

"Here's the upload interface."

<span style="color: #166534">[Show the upload interface with drag-and-drop area]</span>

"Let's upload iPhone reviews from Canada and China."

<span style="color: #166534">[Drag and drop 1-iphone-17-reviews.json]</span>

"Click Analyze to start processing."

<span style="color: #166534">[Click Analyze button, show loading state]</span>

"The file goes to our backend, gets stored in S3 - that's Amazon's cloud storage - triggers Lambda - a serverless function that runs our code - and Comprehend - AWS's AI service - analyzes each review."

<span style="color: #166534">[Wait for processing, click See Results button]</span>

"Results are ready."

<span style="color: #166534">[Scroll through visualizations]</span>

"Language distribution - mostly English with some Chinese reviews. Comprehend automatically detects the language of each review."

"Sentiment analysis - color-coded: green for positive, red for negative. This tells us how customers feel about the product."

"Geographic heatmap showing sentiment by country. We can see which regions love the product and which don't."

"Key phrases - the most important topics customers mention, like 'battery life' or 'camera quality'."

"Entity recognition - Comprehend identifies people, places, brands, and products mentioned in reviews."

"And there's more - syntax analysis, targeted sentiment for specific features, even PII detection to protect customer privacy."

<span style="color: #166534">[Scroll to raw JSON at bottom]</span>

"Full analysis results available as JSON."

## About Author
[Introduce yourself - background, experience, why you're creating this content]

## For Whom
[Explain who should watch this video - target audience, prerequisites, what they'll learn]

## Project Overview
[Show PowerPoint slide with flowcharts:
- AWS services architecture (S3, SQS, Lambda, Comprehend)
- Backend architecture (Express.js, endpoints, S3 integration)
- Frontend architecture (React, Vite, file upload, results display)
- How all components connect and communicate with each other]

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
