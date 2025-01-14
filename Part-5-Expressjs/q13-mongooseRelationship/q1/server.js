const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

const authorRoutes = require("./routes/authorRoutes");
const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

const app = express();

app.use(express.json());

// Routes
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
app.use("/users", userRoutes);
app.use("/transactions", transactionRoutes);

app.use(errorHandler);
const PORT = 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at http://localhost:${PORT}`);
});
