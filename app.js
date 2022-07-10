const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");

const port = 3030;
const productRoutes = require("./routes/product");
const usersRoutes = require("./routes/users");
const mainRoutes = require("./routes/main");
const cartRoutes = require("./routes/cart")


const publicPath = path.resolve(__dirname, "./public");
app.use(express.urlencoded({extended:false}));
app.use(express.static(publicPath));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");

app.use("/", mainRoutes);
app.use("/product", productRoutes);
app.use("/login", usersRoutes);
app.use("/register", mainRoutes);
app.use("/productCart", cartRoutes);

app.listen(port,()=>{console.log("Servidor corriendo en puerto 3030")});
