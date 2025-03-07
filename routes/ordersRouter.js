const express = require("express");

const addOrderInfo = require("../controllers/orderController/addOrderInfo");

const controlWrapper = require("../middlewares/ctrlWrapper");

const ordersRouter = express.Router();

ordersRouter.post("/", controlWrapper(addOrderInfo));

module.exports = ordersRouter;