import { FastifyInstance } from "fastify";

export async function chatRoutes(app: FastifyInstance) {
  app.post("/", async () => {
    return { status: "RAG backend up" };
  });
}
