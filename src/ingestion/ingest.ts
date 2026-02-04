import { OpenAIEmbedding } from "../embeddings/openai.embedding";
import { chroma } from "../vector/chroma.client";
import { chunkText } from "./chunker";


const COLLECTION_NAME = "documents";

export async function ingestText(text: string){
  const embedding = new OpenAIEmbedding(process.env.OPENAI_API_KEY || "");
  
  const chunks = chunkText(text, 500, 50);
  const vectors = await embedding.embedMany(chunks);

  const collection = await chroma.getOrCreateCollection({
    name: COLLECTION_NAME,
  });

  await collection.add({
    ids: chunks.map((_,i)=> `chunk-${i}`),
    documents: chunks,
    embeddings: vectors,
  });
}
