const express = require("express");
const userController = require("../controllers/usersController");
const router = express.Router();
const usersController = require("../controllers/usersController");

//Middlewares
const upload = require("../middlewares/multerUsersMiddleware");
const validations = require('../middlewares/validationUserMiddleware');
const guestMiddleware = require("../middlewares/guestMidlleware");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/register", guestMiddleware, usersController.registerView);

router.post("/register", upload.single('avatar'), validations, usersController.registerProcess);

router.get("/login", guestMiddleware, usersController.login);

router.post("/login", userController.loginProcess);

router.get("/:id/detail", authMiddleware, usersController.userDetail);

router.get("/:id/edit", usersController.editView);

router.delete("/:id/delete", usersController.delete);

router.get("/logout", userController.logout)

module.exports = router;