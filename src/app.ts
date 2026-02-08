import Fastify from "fastify";
import fastifyMultipart from "@fastify/multipart";
import { chatRoutes } from "./routes/chat.route";
import cors from "@fastify/cors";

export function buildApp() {
  const app = Fastify({ logger: true });

  app.register(fastifyMultipart, {
    limits: {
      fileSize: 50 * 1024 * 1024,
    },
  });

  app.register(cors, {
    origin: true,
  });

  app.register(chatRoutes, { prefix: "/api" });

  return app;
}
