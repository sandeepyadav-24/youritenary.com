{/**import React from "react";
import {
  createGoogleGenerativeAI,
  GenerationConfig,
} from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("API key for Google Generative AI is not set.");
}

const genAI = createGoogleGenerativeAI({ apiKey });

const generationConfig: GenerationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = genAI.startChat({
  generationConfig,
  history: [{ role: "user", parts: [] }],
});
 */}