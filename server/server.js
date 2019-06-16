const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
  res.send("<h1>I am server!</h1>");
});

server.use("/api/users/", userRoutes);

module.exports = server;
