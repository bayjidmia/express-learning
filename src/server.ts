import app from "./app";
import { config } from "./config/config";
import { initdb } from "./db";

const server = () => {
  initdb();
  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
};

server();
