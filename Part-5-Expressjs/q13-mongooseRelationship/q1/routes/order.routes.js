const express = require("express");
const { OrderModel } = require("../models/order.models");
const orderRouter = express.Router();

orderRouter.post("/", async (req, res) => {
  try {
    const order = new OrderModel(req.body);
    await order.save();
    res.send({ msg: "Order created successfully", order });
  } catch (err) {
    res.send({ msg: err.message });
  }
});

orderRouter.get("/", async (req, res) => {
  try {
    const order = await OrderModel.find().populate("userId");
    res.send(order);
  } catch (err) {
    res.send({ msg: err.message });
  }
});

module.exports = { orderRouter };
