const mainController = {
    home : (req, res) =>{res.render("index")},
    register : (req, res) =>{res.render("register")},
    postRegister : (req, res)=>{res.redirect("/")},
}

module.exports = mainController;