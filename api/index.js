import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";

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

// Routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
