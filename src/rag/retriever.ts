// import { OpenAIEmbedding } from "../embeddings/openai.embedding";
import { OllamaEmbedding } from "../embeddings/ollama.embedding";
import { chroma } from "../vector/chroma.client";

const COLLECTION_NAME = "documents";

export async function retrieveChunks(
  query: string,
  topK = 4,
): Promise<string[]> {
  // const embedding = new OpenAIEmbedding(process.env.OPENAI_API_KEY || "");
  const embedding = new OllamaEmbedding();

  const queryVector = await embedding.embed(query);

  const collection = await chroma.getCollection({
    name: COLLECTION_NAME,
  });

  const result = await collection.query({
    queryEmbeddings: [queryVector],
    nResults: topK,
  });

  return result.documents[0] as string[];
}
