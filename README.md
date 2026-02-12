# Learn AI Enterprise Careers

Educational content for AI enterprise career development, focusing on practical AWS implementations and modern web development practices.

## Repository Structure

This repository contains course tutorial projects organized by course number:

### Course 01: AWS Comprehend Review Analysis

**Project Path**: `courses/01-aws-comprehend-review-analysis/`

An enterprise-scale product review analysis system using AWS Comprehend. This full-stack application demonstrates AWS AI services integration.

#### Features

- **File Upload Interface**: Users can upload JSON files containing product reviews through the web UI
- **Backend Processing**: The Express.js server receives uploaded files and processes them for AWS integration
- **S3 Storage**: Backend stores uploaded JSON files in an S3 bucket under the `review-analysis-uploads` folder
- **File Naming**: JSON files are automatically renamed to include date and time (down to milliseconds) before being stored in S3

#### Architecture

- **Frontend**: React (Vite) application for file upload and analysis triggering
- **Backend**: Express.js server with file upload capabilities and S3 integration
- **AWS Services**: S3 for file storage, with planned SQS, Lambda, Comprehend, and EventBridge pipeline

#### Technology Stack

- **Frontend**: React 18, Vite, ESLint
- **Backend**: Express.js, CORS, Multer, AWS SDK
- **AWS Services**: S3, SQS, Lambda, Comprehend, EventBridge (planned)

#### Development Setup

**Frontend**:
```bash
cd courses/01-aws-comprehend-review-analysis/frontend
npm install
npm run dev
```

**Backend**:
```bash
cd courses/01-aws-comprehend-review-analysis/backend
npm install
npm start
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
