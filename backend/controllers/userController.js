const db = require("../db/database");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require('uuid');

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
    res.json({ status: false, message: err.errors.message });
  }
};

exports.storeUser = async (req, res) => {
  try {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let hashed = await bcrypt.hash(password, 10);
    let secretToken = uuidv4();
    let apiToken = uuidv4();
    let user = await User.create({
      username: username,
      email: email,
      job_id: 1,
      password: hashed,
      token: secretToken,
      status_id: 1,
      api_token: apiToken,
    });
    res.json({ status: true, message: "User added!" });
  } catch (e) {
    res.json({ status: false, message: e.errors.message, error: e });
  }
};
