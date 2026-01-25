import Fastify from "fastify";
import { chatRoutes } from "./routes/chat.route";

export const buildApp = () => {
  const app = Fastify({ logger: true });

  app.register(chatRoutes, { prefix: "/chat" });

  return app;
};
