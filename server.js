//Dependencies
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

//Routers
const carRouter = require("./carsRouter");

//Create server
const server = express();

//Plug in middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

//Plug in routers
server.use("/api/cars", carRouter);

module.exports = server;
