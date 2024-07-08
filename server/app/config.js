const express = require("express");

const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

app.use(express.json());

const apiRouter = require("./routers/api/router");

app.use("/api", apiRouter);

module.exports = app;
