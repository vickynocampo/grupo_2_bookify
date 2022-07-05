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


    create: (req, res) => { res.render("productCreate") },
    edit: (req, res) => { res.render("productEdit") },
    getProductById: (req, res) => {
        const bookId = parseInt(req.params.id, 10);
        let bookFounded = "";
        for (let i = 0; i <= books.length; i++) {
            if (books[i].id === bookId) {
                bookFounded = books[i]
                res.render("productDetail", { book: bookFounded })
            }
        }
    }
}


module.exports = productsController;