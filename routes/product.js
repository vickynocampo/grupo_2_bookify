const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/", productsController.detail);
// router.get("/", (req, res) => {
//     res.send("Holaa")
// })

router.post("/", productsController.createBook);
router.get("/:id", productsController.getProductById)
router.get("/create", productsController.createView);
router.get("/:id/edit", productsController.editView);


module.exports = router;