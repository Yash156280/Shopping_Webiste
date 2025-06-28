const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const user = new User({ name, email, password });
  const saved = await user.save();
  res.status(201).json(saved);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
