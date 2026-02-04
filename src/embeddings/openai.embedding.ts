import OpenAI from "openai";
import { EmbeddingProvider } from "./embedding.interface";
import { env } from "../../src.config.env";

export class OpenAIEmbedding implements EmbeddingProvider {
  private client: OpenAI;

  constructor(apiKey: string) {
    this.client = new OpenAI({
      apiKey: env.OPENAI_API_KEY,
    });
  }
  async embed(text: string): Promise<number[]> {
    const response = await this.client.embeddings.create({
      model: "text-embedding-3-small",
      input: text,
    });
    return response.data[0].embedding;
  }
  async embedMany(texts: string[]): Promise<number[][]> {
    const response = await this.client.embeddings.create({
      model: "text-embedding-3-small",
      input: texts,
    });
    return response.data.map((item) => item.embedding);
  }
}
