const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/", productsController.detail);
// router.get("/", (req, res) => {
//     res.send("Holaa")
// })
router.get("/create", productsController.createView);
router.post("/", productsController.createBook);
router.get("/edit", productsController.edit);
router.get("/:id", productsController.getProductById)

module.exports = router;