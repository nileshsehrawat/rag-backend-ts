import { FastifyInstance } from "fastify";
import { ingestText } from "../ingestion/ingest";
import { answerQuestion } from "../rag/rag.service";

export async function chatRoutes(app: FastifyInstance) {
  app.post("/ingest", async (req)=> {
    const {text} = req.body as {text:string};
    await ingestText(text);
    return {status: "ingested"};
  });
  app.post("/", async (req) => {
    const {question} = req.body as {question:string};
    const answer = await answerQuestion(question);
    return {answer};
  })
}
