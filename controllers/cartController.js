const cartController = {
    cartView : (req, res) => {res.render("productCart")},
    cartPost: (req, res)=>{res.redirect("/")}
}

module.exports = cartController;