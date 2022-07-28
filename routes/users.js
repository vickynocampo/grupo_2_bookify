const express = require("express");
const userController = require("../controllers/usersController");
const router = express.Router();
const usersController = require("../controllers/usersController");
const upload = require("../middlewares/multerUsersMiddleware");
const validations = require('../middlewares/validationUserMiddleware');

router.get("/register", usersController.registerView);

router.post("/register", upload.single('avatar'), validations, usersController.registerProcess);

router.get("/login", usersController.login);

router.get("/:id/detail", usersController.userDetail);

router.get("/:id/edit", usersController.editView);

module.exports = router;