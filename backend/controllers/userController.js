const db = require("../db/database");
const User = require("../models/user");
const bcrypt = require("bcrypt");

exports.getTest = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json({ data: users });
  } catch (err) {
    console.log(err);
  }
};

exports.postUser = async (req, res) => {
  try {
    let userId = req.body.id;
    let user = await User.findOne({
      where: {
        id: userId,
      },
    });
    res.json({ id: userId, data: user });
  } catch (err) {
    console.log(err);
  }
};

exports.storeUser = async (req, res) => {
  try {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let hashed = await bcrypt.hash(password, 10);
    let user = await User.create({
      name: username,
      email: email,
      password: hashed,
    });
    res.json({ status: true, message: "User added!", data: user });
  } catch (err) {
    console.log(err);
  }
};
