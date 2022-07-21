const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, path.join(__dirname, "../public/img/img-books"))},
    filename: (req, file, cb) => {
        console.log(file);
        let nombreImagen = "libro" + Date.now() + path.extname(file.originalname);
        cb(null, nombreImagen);
    }
})

module.exports = multer({ storage });