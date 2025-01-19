require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Middleware
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

const attendeeRoutes = require("./routes/attendeeRoutes");
const eventRoutes = require("./routes/eventRoutes");
const organizerRoutes = require("./routes/organizerRoutes");
const registrationRoutes = require("./routes/registrationRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database before starting the server
connectDB();

// Middleware
app.use(express.json()); // Handle JSON bodies
app.use(cors()); // Enable cross-origin requests

// Routes
app.use("/attendee", attendeeRoutes);
app.use("/event", eventRoutes);
app.use("/organizer", organizerRoutes);
app.use("/registration", registrationRoutes);

// Error handler should be the last middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
