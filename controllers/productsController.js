const fs = require('fs');
const path = require('path');

const booksFilePath = path.join(__dirname, '../data/books.json');
const books = JSON.parse(fs.readFileSync(booksFilePath, 'utf-8'));


const productsController = {
    detail :(req, res)=>{res.render("productDetail")},
    // app.post("/productDetail",(req, res)=>{res.redirect("/")});

    create: (req, res) => {res.render("productCreate")},
    edit: (req, res) => {res.render("productEdit")},
    getProductById: (req, res) => {res.send("hola")}
    //    const bookId = parseInt(req.params.id,10);
    /*    console.log(bookId);
        const bookFounded;
        for (let i=0; i<books.length; i++) {
            if (books[i].id === bookId) {
                bookFounded = books[i];
            }
            else {res.render("productDetail", {book: bookFounded})}
        }
    } */
}


module.exports = productsController;