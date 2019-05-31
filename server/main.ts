import * as express from "express";
import * as next from "next";
import { createApolloServer } from "./createApolloServer";
import { createServer } from "http";

(async () => {
  const port = 3000;
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
