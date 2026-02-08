import { ChromaClient } from "chromadb";
import { env } from "../config/env";

export const chroma = new ChromaClient({
  host: env.CHROMA_HOST,
  port: env.CHROMA_PORT,
});
