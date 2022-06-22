const path = require("path");

const loginController = {
    login : (req, res) =>{res.sendFile(path.resolve(__dirname,"../views/login.html"))}
}

const registerController = {
    login : (req, res) =>{res.sendFile(path.resolve(__dirname,"../views/register.html"))}
}

module.exports = loginController;

module.exports = registerController;