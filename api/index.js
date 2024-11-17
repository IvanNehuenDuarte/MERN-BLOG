import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import "dotenv/config";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";
import categoryRoute from "./routes/category.route.js";

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
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/category", categoryRoute);

// MIDDLEWARE
const cors = require("cors");
app.use(
  cors({
    origin: "https://mate-script.vercel.app/",
    credentials: true,
  })
);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Ruta raíz
app.get("/", (req, res) => {
  res.send("¡Backend funcionando correctamente!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
