import express from "express";
import { createServer } from "http";
import next from "next";
import { createApolloServer } from "./createApolloServer";

process.env.PORT = process.env.PORT || "3000";

(async () => {
  const port = process.env.PORT;
  const dev = process.env.NODE_ENV !== "production";

  const nextApp = next({ dev });
  const handle = nextApp.getRequestHandler();

  await nextApp.prepare();

  const app = express();

  const httpServer = createServer(app);

  const apolloServer = createApolloServer();
  apolloServer.installSubscriptionHandlers(httpServer);
  apolloServer.applyMiddleware({ app });

  app.get("*", (req, res) => {
    return handle(req, res);
  });

  httpServer.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
})();
