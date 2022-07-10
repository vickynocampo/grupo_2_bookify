const fs = require('fs');
const path = require('path');

const booksFilePath = path.join(__dirname, '../data/books.json');
const books = JSON.parse(fs.readFileSync(booksFilePath, 'utf-8'));


const productsController = {
    list: (req, res) => {
        res.render("products", { books: books })
    },

    createView: (req, res) => {
        res.render("productCreate")
    },

    createBook: (req, res) => {
        let newBook = {
            id: books.length + 1,
            bookCategory: req.body.bookCategory,
            image: "/img-books/" + req.file.filename,
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
        let booksJSON = JSON.stringify(books, null, 4)
        fs.writeFileSync(booksFilePath, booksJSON)
        res.redirect("/product")
    },

    getProductById: (req, res) => {
        const bookId = parseInt(req.params.id, 10);
        let bookFounded = "";
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === bookId) {
                bookFounded = books[i]
                res.render("productDetail", { book: bookFounded })
            }
        }
    },

    editView: (req, res) => {
        let idBook = parseInt(req.params.id, 10);
        let bookCategories = ["Novela", "Cuento", "Poesia", "Narrativa", "Historia", "Educación", "Arte", "Comic"]
        let categories = ["En Oferta", "Novedad"];
        let bookFounded = {};
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === idBook) {
                bookFounded = books[i]
                console.log(bookFounded)
                res.render("productEdit", { book: bookFounded, bookCategories: bookCategories, categories: categories })
            }
        }
    },

    update: (req, res) => {
        let idBook = parseInt(req.params.id, 10);
        for (let i = 0; i < books.length; i++) {
            if (books[i].id == idBook) {
                books[i].id = idBook;
                books[i].bookCategory = req.body.bookCategory;
                // books[i].image = req.file.filename
                books[i].title = req.body.title;
                books[i].author = req.body.author;
                books[i].editorial = req.body.editorial;
                books[i].price = req.body.price;
                books[i].discount = req.body.discount;
                books[i].sinopsis = req.body.sinopsis;
                books[i].isbn = req.body.isbn;
                books[i].pages = req.body.pages;
                books[i].language = req.body.language;
                books[i].format = req.body.format;
                books[i].binding = req.body.binding;
                books[i].peso = req.body.peso;
                books[i].published = req.body.published;
                books[i].category = req.body.category;
                books[i].stock = req.body.stock
                
                function image(){
                    if(req.file.filename == undefined){
                        books[i].image = books[i].image
                    } else {
                        books[i] = req.file.filename
                    }
                }

                let booksJSON = JSON.stringify(books, null, 4)
                fs.writeFileSync(booksFilePath, booksJSON)
                res.redirect('/product/' + idBook)
            }
        }
    },

    destroy: (req, res) => {
        let idBook = req.params.id;
        let newArray = books.filter(function(b){
            return b.id != idBook;
        })

        let booksJSON = JSON.stringify(newArray, null, 4)
        fs.writeFileSync(booksFilePath, booksJSON)
        res.redirect('/product')

        res.send(newArray);
    }
}


module.exports = productsController;