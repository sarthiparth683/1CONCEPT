//  Implementation of Third-Party Middlewares
// CORS

const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS for all origins
app.use(cors());

app.get("/data", (req, res) => {
  res.json({ message: "This is CORS-enabled for all origins!" });
});

app.use(
    cors({
      origin: "http://example.com",
      methods: "GET,POST",
      allowedHeaders: "Content-Type,Authorization",
    })
  );
  

app.listen(8080, () => {
  console.log(" Server is running at http://localhost:8080 ");
});  