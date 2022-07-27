const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const upload = require("../middlewares/multerUsersMiddleware");
const validations = require('../middlewares/validationUserMiddleware');

router.get("/register", usersController.registerView);

router.get("/login", usersController.login);

router.get("/:id/detail", usersController.editUser);

router.post("/login", usersController.loginPost);

router.post("/register", upload.single('avatar'), validations, usersController.registerProcess);

module.exports = router;