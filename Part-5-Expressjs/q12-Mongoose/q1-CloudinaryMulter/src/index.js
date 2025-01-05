const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");
require("dotenv").config();
const PORT = 8181;
const app = express();
app.use(express.json());
// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// multer cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "uploads",
    resource_type: "auto",
  },
});
// multer is initiated
const upload = multer({ storage });
// Sends index.html file to the main route
app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "index.html"));
});
// Uploads the file using multer in cloudinary
app.post("/upload", upload.single("file"), (req, res) => {
  if (req.file && req.file.path) {
    res.status(200).json({
      message: "File uploaded successfully",
      imageUrl: req.file.path,
    });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
