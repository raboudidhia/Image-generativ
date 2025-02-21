import * as dotenv from "dotenv";
import { createError } from "../error.js";
import fetch from "node-fetch";

dotenv.config();

// Hugging Face API Key
const HF_API_KEY = process.env.HUGGINGFACE_API_KEY;

// Controller to generate Image
export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const response = await fetch("https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: prompt }),
    });

    if (!response.ok) {
      throw new Error(`Hugging Face API Error: ${response.statusText}`);
    }

    const imageBuffer = await response.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString("base64");

    return res.status(200).json({ photo: base64Image });
  } catch (error) {
    next(
      createError(
        error.status || 500,
        error.message || "Error generating image"
      )
    );
  }
};