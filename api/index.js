import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to Mongoose");
  })
  .catch((error) => {
    console.log(`Failed to connect to Mongoose, error message: ${error}`);
  });

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

// MIDDLEWARE
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
