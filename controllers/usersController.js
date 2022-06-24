const loginController = {
    login : (req, res) =>{res.render("login")}, 
    loginPost: (req, res)=>{res.redirect("/")}
}

module.exports = loginController;