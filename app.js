const express = require("express");
const path = require("path");
const session = require("express-session");
const cookies = require("cookie-parser");
const app = express();
const methodOverride = require("method-override");

const port = 3030;
const productRoutes = require("./routes/product");
const usersRoutes = require("./routes/users");
const mainRoutes = require("./routes/main");
const cartRoutes = require("./routes/cart");
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

const publicPath = path.resolve(__dirname, "./public");

app.use(session({
    secret: "Informacion confidencial de Bookify",
    resave: false,
    saveUninitialized: false,
}));
app.use(userLoggedMiddleware);
app.use(cookies());
app.use(express.urlencoded({extended:false}));
app.use(express.static(publicPath));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");

app.use("/", mainRoutes);
app.use("/product", productRoutes);
app.use("/user", usersRoutes);
app.use("/productCart", cartRoutes);

app.listen(port,()=>{console.log("Servidor corriendo en puerto 3030")});