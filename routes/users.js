//Requires//
const express = require("express");
const userController = require("../controllers/usersController");
const router = express.Router();
const usersController = require("../controllers/usersController");

//Middlewares//
const upload = require("../middlewares/multerUsersMiddleware");
const validations = require('../middlewares/validationUserMiddleware');
const guestMiddleware = require("../middlewares/guestMidlleware");
const authMiddleware = require("../middlewares/authMiddleware");

//View Register Form//
router.get("/register", guestMiddleware, usersController.registerView);

//Process Register Form//
router.post("/register", upload.single('avatar'), validations, usersController.registerProcess);

//View Login Form
router.get("/login", guestMiddleware, usersController.login);

//Process Login Form
router.post("/login", userController.loginProcess);

//View User Profile
router.get("/:id/detail", authMiddleware, usersController.userDetail);

//View User Edit 
router.get("/:id/edit", usersController.editView);

//Process User Delete
router.delete("/:id/delete", usersController.delete);

//Process User Logout
router.get("/logout", userController.logout)

module.exports = router;