const productsController = {
    detail :(req, res)=>{res.render("productDetail")},
    // app.post("/productDetail",(req, res)=>{res.redirect("/")});

    create: (req, res) => {res.render("productCreate")},
    edit: (req, res) => {res.render("productEdit")}
}

module.exports = productsController;