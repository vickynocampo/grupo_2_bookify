const express = require("express");
const router = express.Router();

const loginController = require("../controllers/usersController")

router.get("/", loginController.login);

const registerController = require("../controllers/usersController")

router.get("/", registerController.register);

module.exports = router;