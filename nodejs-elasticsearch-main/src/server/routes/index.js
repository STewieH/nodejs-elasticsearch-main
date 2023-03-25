const express = require("express");
const controller = require("../controllers");
const routes = express.Router();

routes.route("/").post(controller.getQuotes);
routes.route("/new").post(controller.addQuote);

module.exports = routes;
