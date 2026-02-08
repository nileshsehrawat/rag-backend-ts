import { FastifyInstance } from "fastify";
import { ingestText } from "../ingestion/ingest";
import { loadPdfBuffer } from "../ingestion/pdf.loader";
import { answerQuestion } from "../rag/rag.service";

export async function chatRoutes(app: FastifyInstance) {
  app.post("/upload", async (req, reply) => {
    let text = "";

    if (req.isMultipart()) {
      const file = await req.file();

      if (!file) {
        return reply.status(400).send({ message: "No file uploaded." });
      }

      const buffer = await file.toBuffer();
      text = await loadPdfBuffer(buffer);
    } else {
      const body = req.body as { text?: string };
      text = body.text || "";
    }

    if (!text.trim()) {
      return reply.status(400).send({ message: "No text found in request." });
    }

    await ingestText(text);

    return {
      message: "PDF uploaded successfully",
    };
  });

  app.post("/chat", async (req) => {
    const { query, doc_name } = req.body as {
      query: string;
      doc_name?: string;
    };

    const answer = await answerQuestion(query);

    return {
      answer,
      doc_name: doc_name || "unknown.pdf",
      page: 1, // placeholder for now
    };
  });

  //suggestions made static for now
  app.post("/suggestions", async () => {
    return {
      suggestions: [
        "What is this document about?",
        "When did this start?",
        "Summarize the key points",
      ],
    };
  });
}
