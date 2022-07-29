const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb (null, path.join(__dirname, "../public/img/img-avatars"))},
    filename: (req, file, cb) => {
        let nombreImagen = "user" + Date.now() + path.extname(file.originalname);
        cb(null, nombreImagen);
    }
})

module.exports = multer({ storage });