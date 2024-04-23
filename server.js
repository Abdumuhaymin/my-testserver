const jsonServer = require("json-server");
const express = require("express");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  setTimeout(next, 1000);
});
setTimeout(() => {
  server.use(router);
  app.use(server);
}, 1000);

const app = express();

const PORT = 3600;
app.listen(PORT, () => {
  console.log("Developer's server is running on...");
});
