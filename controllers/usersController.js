const loginController = {
    login : (req, res) =>{res.render("login")}, 
    loginPost: (req, res)=>{res.redirect("/")}
}

const registerController = {
    login : (req, res) =>{res.sendFile(path.resolve(__dirname,"../views/register.html"))}
}

module.exports = loginController;

module.exports = registerController;