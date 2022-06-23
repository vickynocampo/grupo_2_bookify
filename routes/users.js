const express = require("express");
const { loginPost } = require("../controllers/usersController");
const router = express.Router();

const loginController = require("../controllers/usersController")

router.get("/", loginController.login);
router.post("/", loginController.loginPost);

module.exports = router;