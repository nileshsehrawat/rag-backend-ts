import { OpenAIEmbedding } from "./openai.embedding";

async function test() {
  const embedding = new OpenAIEmbedding(process.env.OPENAI_API_KEY || "");
  const vector = await embedding.embed("Delhi Metro started in 2002");
  console.log("Vector length:", vector.length);
}

test();
