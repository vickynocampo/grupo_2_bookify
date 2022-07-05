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
        res.render("productDetail", { similar: similares })},

<<<<<<< HEAD

    create: (req, res) => { res.render("productCreate") },
    edit: (req, res) => { res.render("productEdit") },
=======
    create: (req, res) => {res.render("productCreate")},

>>>>>>> e6e4df76c38c4e867d30d5c3c00a276eb756db47
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

    edit: (req, res) => {res.render("productEdit")},

}


module.exports = productsController;