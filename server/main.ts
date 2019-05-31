import * as express from "express";
import * as next from "next";

(async () => {
  const port = 3000;
  const dev = process.env.NODE_ENV !== "production";
  const app = next({ dev });
  const handle = app.getRequestHandler();

  await app.prepare();

  const server = express();

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
})();
