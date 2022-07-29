const {body} = require('express-validator');
const path = require('path');

const validations = [
    body("name").notEmpty().withMessage("Tiene que escribir tu nombre"),
    body("lastname").notEmpty().withMessage("Tiene que escribir tu apellido"),
    body("birthday").notEmpty().withMessage("Tiene que ingresar tu fecha de nacimiento"),
    body('userName').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
    body("email").notEmpty().withMessage("Tienes que escribir un correo electronico").bail()
    .isEmail().withMessage("Debes escribir un formato de correo valido"),
    body("password").notEmpty().withMessage("Tienes que escribir una contraseña").bail()
    .isInt().withMessage("La contraseña debe ser numerica"),
    body("avatar").custom((value, {req})=>{
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".gif"];
        if (!file){
            throw new Error("Tienes que subir una imagen");
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
            throw new Error(`Las extensiones de arhcivo permitidas son ${acceptedExtensions.join(", ")}`)
            }
        }
        return true;
    })
]

module.exports = validations