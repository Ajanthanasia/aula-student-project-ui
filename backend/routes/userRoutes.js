const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const loginController = require("./../controllers/loginController");

router.get("/users", userController.getTest);
router.post("/user", userController.postUser);
router.post("/store-user", userController.storeUser);

router.post("/login", loginController.authLogin);

module.exports = router;
