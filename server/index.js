import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import PostRouter from './routes/Posts.js';
import GenerateImageRouter from './routes/GenerateImage.js';

dotenv.config();

const app = express();
const port = 3030;

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// error handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});
app.use("/api/post", PostRouter);
app.use("/api/generateImage", GenerateImageRouter);
// Default get
app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello World!",
  });
});
const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.error("Failed to connect to DB");
      console.error(err);
    });
};

// Function to start the server
const startServer = async () => {
  try {
    connectDB();
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();