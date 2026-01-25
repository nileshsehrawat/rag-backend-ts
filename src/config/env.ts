import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: Number(process.env.PORT) || 3000,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
};
  