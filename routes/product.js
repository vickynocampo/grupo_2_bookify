const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, path.join(__dirname, "../public/img/img-books"))},
    filename: (req, file, cb) => {
        console.log(file);
        let nombreImagen = "libro" + Date.now() + path.extname(file.originalname);
        cb(null, nombreImagen);
    }
})
const upload = multer({storage: storage});

router.get("/", productsController.list)
router.get("/create", productsController.createView);
router.post("/", upload.single("image"), productsController.createBook);
router.get("/:id", productsController.getProductById)
router.get("/:id/edit", productsController.editView);
router.put("/:id", productsController.update);
router.delete("/:id", productsController.destroy);

module.exports = router;