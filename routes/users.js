const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

//router.post("/", userController.postRegister);

router.get("/register", usersController.register);

router.get("/login", usersController.login);

router.get("/:id/detail", usersController.editUser);

router.post("/login", usersController.loginPost);

router.post("/register", usersController.postRegister);

module.exports = router;