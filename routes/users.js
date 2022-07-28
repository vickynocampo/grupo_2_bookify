const express = require("express");
const userController = require("../controllers/usersController");
const router = express.Router();
const usersController = require("../controllers/usersController");
const upload = require("../middlewares/multerUsersMiddleware");
const validations = require('../middlewares/validationUserMiddleware');

router.get("/register", usersController.registerView);

router.post("/register", upload.single('avatar'), validations, usersController.registerProcess);

router.get("/login", usersController.login);

router.post("/login", usersController.loginProcess);

router.get("/:id/detail", usersController.editUser);

module.exports = router;