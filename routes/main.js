const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get("/register", mainController.register);
router.post("/", mainController.postRegister);

module.exports = router;