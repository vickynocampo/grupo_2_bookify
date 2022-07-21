const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const userController = {
    register : (req, res) =>{res.render("register")},
    postRegister : (req, res)=>{res.redirect("/")},
    login : (req, res) =>{res.render("login")}, 
    loginPost: (req, res)=>{res.redirect("/")},  
    editUser: (req, res) => {        
        let idUser = parseInt(req.params.id, 10);
        let userFounded = {};
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === idUser) {
                userFounded = users[i]
                console.log(userFounded)
                res.render("userDetail", { user: userFounded })
            }
        }    }
  
}

module.exports = userController;