const fs = require('fs');
const path = require('path');

const booksFilePath = path.join(__dirname, '../data/books.json');
const books = JSON.parse(fs.readFileSync(booksFilePath, 'utf-8'));


const productsController = {
    detail :(req, res)=>{res.render("productDetail")},
    // app.post("/productDetail",(req, res)=>{res.redirect("/")});

    create: (req, res) => {res.render("productCreate")},

    getProductById: (req, res) => {
        const bookId = parseInt(req.params.id,10);
        let bookFounded = "";
        for (let i=0; i<=books.length; i++) {
            if (books[i].id === bookId) {
                bookFounded = books[i]
                res.render("productDetail", {book: bookFounded})
            } 
        }
    },

    edit: (req, res) => {res.render("productEdit")},

}


module.exports = productsController;