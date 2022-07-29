// CRUD: Create, Read, Update and Delete
// 1. Guardar al usuario en la DB: ok
// 2. Buscar al usuario que se que quiere loguear por su email: ok
// 3. Buscar a un usuario por su Id: ok
// 4. Editar la info. de un usuario
// 5. Eliminar un usuario de la DB: ok

const fs = require("fs");
const path = require("path");

const User = {
    // 1. Referenciamos cual es el archivo de nuestra BD
    fileName: path.resolve(__dirname, "../data/users.json"),

    // 2. Leemos el archivo con JSON parse usando FS
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
    },

    findAll: function () {
        return this.getData();
    },

    generateID: function () {
        //Primero debo obtener todos los usuarios:
        let allUsers = this.findAll();
        //Me interesa solo el ultimo id:
        let lastUser = allUsers.pop(); //Pop devuelve el ultimo usuario
        //si esta vacio el archivo, devuleve error, por ello el JSON inicial debe ser un array vacio, y luego hacemos un if por si no hay un ultimo usuario para iniciar en 
        if (lastUser) {
            return lastUser.id + 1;
        } return 1;
    },

    findByPk: function (id) {
        //Primero debo obtener todos los usuarios:
        let allUsers = this.findAll();
        //AllUsers es un array, y yo debo encontrar un usuario dentro de el, por ello usamos el metodo find de arrays:
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: //Puedo buscar por el campo que quiera, pero atencion ya que devuelve el primer rresultado. Se debe buscar por mail (valor unico)
        function (campo, textoABuscar) {
            //Primero debo obtener todos los usuarios:
            let allUsers = this.findAll();
            //AllUsers es un array, y yo debo encontrar un usuario dentro de el, por ello usamos el metodo find de arrays:
            let userFound = allUsers.find(oneUser => oneUser[campo] === textoABuscar);
            return userFound;
        },

    create: function (userData/*objeto literal que llega del form. del registro*/) {
        //Primero debo obtener todos los usuarios:
        let allUsers = this.findAll();

        //Creo el usuario:
        let newUser = {
            id: this.generateID(), //Agrego el Id autmatico del metodo generateId
            ...userData  //uso propagacion para que tambien agregue la userData que llega por parametro
        }

        //Lo Inserto en el array con un push al array de usuarios con la data del usuario nuevo que llega por newUser
        allUsers.push(newUser);

        //Lo escribo en el arhcivo, el cual hasta este moneto allUsers sigue siendo un array y yo debo escrbir el arhivo en formato JSON, por ello uso fs para escribir 
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, " "));

        //Devuelvo al nuevo usario
        return newUser;
    },

    editUser: (req, res) => {
        let idUser = parseInt(req.params.id, 10);
        let userFounded = {};
        for (let i = 0; i < this.allUsers.length; i++) {
            if (allUsers[i].id === idUser) {
                userFounded = allUsers[i]
                res.render("userEdit", { user : userFounded })
            }
        }
    },

    delete: function (id) {
        let allUsers = this.findAll();
        //Quiero devolver todos los usuarios menos el del id que llega por parametro
        let finalUsers = allUsers.filter(oneUser => oneUser.id != id)
        //Luego debo escribir nuevamente el archivo con el nuevo array sin el usuario filtrado:
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, " "));
        return true
    }
}

module.exports = User;