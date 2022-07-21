const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const upload = require("../middlewares/multerUsersMiddleware");

router.get("/register", usersController.register);

/*router.post("/register", upload.single("avatar"), userController.) armar processRegistar*/

router.get("/login", usersController.login);

router.get("/:id/detail", usersController.editUser);

router.post("/login", usersController.loginPost);

router.post("/register", usersController.postRegister);

module.exports = router;