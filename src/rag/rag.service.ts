import OpenAI from "openai";
import { retrieveChunks } from "./retriever";
import { buildPrompt } from "./prompt.builder";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function answerQuestion(question:string){
  const chunks = await retrieveChunks(question);
  const prompt = buildPrompt(chunks, question);

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{role: "user", content: prompt}],
  });

  return response.choices[0].message?.content;
}