const express = require("express");
const devcontroller = require("./controllers/DevController");
const likecontroller = require("./controllers/LikeController");
const dislikecontroller = require("./controllers/DislikeController");

const routes = express.Router();

routes.post("/devs", devcontroller.store);
routes.post("/devs/:devId/likes", likecontroller.store);
routes.post("/devs/:devId/dislikes", dislikecontroller.store);
routes.get("/devs", devcontroller.index);

module.exports = routes;
