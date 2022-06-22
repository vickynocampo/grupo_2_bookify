const path = require("path");

const productsController = {

    detail :(req, res)=>{res.sendFile(path.resolve(__dirname, "../views/productDetail.html" ))}
}

module.exports = productsController;