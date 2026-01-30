import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());

app.post("/analyze", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  console.log("Received file:", req.file.originalname);
  console.log("File size:", req.file.size);

  // Later:
  // 1. Send message to SQS
  // 2. Return 200 immediately

  return res.status(200).json({
    message: "Review analysis job accepted"
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
