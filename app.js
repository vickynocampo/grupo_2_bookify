const express = require("express");
const path = require("path");
const app = express();
const port = 3030;
const productRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const mainRoutes = require("./routes/main");
const cartRoutes = require("./routes/cart")

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.set("view engine", "ejs");

app.use("/", mainRoutes);
app.use("/product", productRoutes);
app.use("/login", usersRoutes);
app.use("/register", mainRoutes);
app.use("/productCart", cartRoutes);
//Entran por la linea 16 app.use("/product/create", productRoutes); 
//Entran por la linea 16 app.use("/product/edit", productRoutes);

app.listen(port,()=>{console.log("Servidor corriendo en puerto 3030")});