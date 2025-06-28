const Order = require('../models/orderModel');

exports.createOrder = async (req, res) => {
  const order = new Order(req.body);
  const saved = await order.save();
  res.status(201).json(saved);
};

exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('userId').populate('products.productId');
  res.json(orders);
};
