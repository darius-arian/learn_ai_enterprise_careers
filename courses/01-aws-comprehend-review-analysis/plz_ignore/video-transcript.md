# Episode 1: AWS Comprehend Review Analysis - Video Transcript

## Demo
[Showcase the working project - upload a file, trigger analysis, show results with visualizations]

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
