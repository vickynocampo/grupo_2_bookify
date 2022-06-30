const fs = require('fs');
const path = require('path');

const booksFilePath = path.join(__dirname, '../data/books.json');
const books = JSON.parse(fs.readFileSync(booksFilePath, 'utf-8'));

const mainController = {
    home : (req, res) =>{res.render("index", {books: books})},
    register : (req, res) =>{res.render("register")},
    postRegister : (req, res)=>{res.redirect("/")},
}

module.exports = mainController;