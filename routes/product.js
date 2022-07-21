const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController");
const upload = require("../middlewares/multerBooksMiddleware");

router.get("/", productsController.list);
router.get("/create", productsController.createView);
router.post("/", upload.single("image"), productsController.createBook);
router.get("/:id", productsController.getProductById)
router.get("/:id/edit", productsController.editView);
router.put("/:id", productsController.update);
router.delete("/:id", productsController.destroy);

module.exports = router;