# AWS Comprehend Deep Dive: Enterprise-Scale Product Review Analysis

## Video 01  Frontend Foundation

In this video, we build a minimal React frontend that allows users to:
- Upload a JSON file containing product reviews
- Trigger backend analysis via API call

This frontend will later connect to an event-driven AWS pipeline using SQS, Lambda, Comprehend, and EventBridge.

## Whats Implemented
- React (Vite)
- File upload (.json)
- Analyze button (POST request to backend)
- Local development support

## Run Frontend

cd frontend
npm install
npm run dev
