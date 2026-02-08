import dotenv from "dotenv";
dotenv.config();

export const env = {
  PORT: Number(process.env.PORT) || 8000,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  CHROMA_HOST: process.env.CHROMA_HOST || "localhost",
  CHROMA_PORT: Number(process.env.CHROMA_PORT) || 8002,
};
