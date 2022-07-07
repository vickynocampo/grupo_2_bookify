const fs = require('fs');
const path = require('path');

const booksFilePath = path.join(__dirname, '../data/books.json');
const books = JSON.parse(fs.readFileSync(booksFilePath, 'utf-8'));


const productsController = {
    detail: (req, res) => {

        let actualBookCat = req.paramas.id
        let similares = [];
        for (let i = 0; i < books.length; i++) {
            if (books[i].bookCategory === actualBookCat) {
                enOferta.push(similares[i])
            }
        }
        res.render("productDetail",)
    },

    createView: (req, res) => {
        res.render("productCreate")
    },

    createBook: (req, res) => {
         let newBook = {
             id: books.length + 1,
             bookCategory: req.body.bookCategory,
              //image: ??,
             title: req.body.title,
             author: req.body.author,
             editorial: req.body.editorial,
             price: req.body.price,
             discount: req.body.discount,
             sinopsis: req.body.sinopsis,
             isbn: req.body.isbn,
             pages: req.body.pages,
             language: req.body.language,
             format: req.body.format,
             binding: req.body.binding,
             peso: req.body.peso,
             published: req.body.published,
             category: req.body.category,
             stock: req.body.stock

         }

        books.push(newBook);
        let booksJSON = JSON.stringify(books)
        fs.writeFileSync(booksFilePath, booksJSON)
        res.send("Agregaste un nuevo libro")
    },

    getProductById: (req, res) => {
        const bookId = parseInt(req.params.id, 10);
        let bookFounded = "";
        for (let i = 0; i <= books.length; i++) {
            if (books[i].id === bookId) {
                bookFounded = books[i]
                res.render("productDetail", { book: bookFounded })
            }
        }
    },

    edit: (req, res) => { res.render("productEdit") },

}


module.exports = productsController;