import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
//import connectDB from "./config/db";
import bodyParser from "body-parser";
import tripRouter from "./routes/trip";

// Gemini Setup
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/tripplanner", tripRouter);

// DB Connection
//connectDB();

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDAqpD89nUCDlDnKB-9YYaQn4rlyPG5Lsk");

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
