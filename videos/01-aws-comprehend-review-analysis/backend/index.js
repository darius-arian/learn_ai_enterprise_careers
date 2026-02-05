import express from "express";
import cors from "cors";
import multer from "multer";
import { S3Client, PutObjectCommand, ListObjectsV2Command, GetObjectCommand } from "@aws-sdk/client-s3";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Initialize S3 client
const s3Client = new S3Client({ 
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

app.use(cors());

app.post("/analyze", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  // Validate file type
  if (!req.file.originalname.toLowerCase().endsWith('.json')) {
    return res.status(400).json({ error: "Only JSON files are allowed" });
  }

  console.log("Received file:", req.file.originalname);
  console.log("File size:", req.file.size);

  try {
    // Generate timestamp-based filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `${timestamp}.json`;
    
    // Upload to S3
    const uploadParams = {
      Bucket: process.env.S3_BUCKET_NAME || "your-bucket-name",
      Key: `01-aws-comprehend-review-analysis/review-analysis-uploads/${fileName}`,
      Body: req.file.buffer,
      ContentType: "application/json"
    };

    await s3Client.send(new PutObjectCommand(uploadParams));
    
    console.log(`File uploaded to S3: ${fileName}`);

    // Later:
    // 1. Send message to SQS
    // 2. Return 200 immediately

    return res.status(200).json({
      message: "Review analysis job accepted",
      fileName: fileName,
      expectedResultFile: `analysis-${timestamp}.json`
    });
  } catch (error) {
    console.error("S3 upload error:", error);
    return res.status(500).json({ error: "Failed to process file" });
  }
});

app.get("/results/:expectedResultFile", async (req, res) => {
  try {
    const { expectedResultFile } = req.params;
    
    // Construct the full S3 key for the expected result file
    const resultKey = `01-aws-comprehend-review-analysis/analysis-results/${expectedResultFile}`;
    
    try {
      // Try to get the specific analysis result from S3
      const getParams = {
        Bucket: process.env.S3_BUCKET_NAME || "your-bucket-name",
        Key: resultKey
      };

      const response = await s3Client.send(new GetObjectCommand(getParams));
      const resultContent = await response.Body.transformToString();
      const analysisResults = JSON.parse(resultContent);

      return res.status(200).json({
        message: "Analysis results found",
        status: "completed",
        results: analysisResults
      });

    } catch (s3Error) {
      // If file doesn't exist yet, return processing status
      if (s3Error.name === 'NoSuchKey') {
        return res.status(202).json({ 
          message: "Analysis in progress. Please wait a few more seconds and retry.",
          status: "processing",
          expectedFile: expectedResultFile
        });
      }
      throw s3Error;
    }

  } catch (error) {
    console.error("Error fetching results:", error);
    return res.status(500).json({ error: "Failed to fetch results" });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
