const fs = require('fs');
const path = require('path');

const booksFilePath = path.join(__dirname, '../data/books.json');
const books = JSON.parse(fs.readFileSync(booksFilePath, 'utf-8'));


const productsController = {
    detail :(req, res)=>{res.render("productDetail")},
    // app.post("/productDetail",(req, res)=>{res.redirect("/")});

    createView: (req, res) => {
        res.render("productCreate")
    },

    createBook: (req, res) => {
        let newBook = {
            id: books.length + 1,
            // bookCategory: ??,
            // image: ??,
            title: req.body.title,
            author: req.body.author,
            editorial: req.body.editorial,
            price: req.body.price,
            discount: req.body.discount,
            sinopsis: req.body.sinopsis,
            isbn: req.body.isbn,
            pages: req.body.pages,
            lenguage: req.body.lenguage,
            format: req.body.format,
            // binding: ??,
            peso: req.body.peso,
            published: req.body.published,
            // category: ??,
            stock: req.body.stock

        }
    },

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