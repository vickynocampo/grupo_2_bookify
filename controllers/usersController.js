const fs = require('fs');
const path = require('path');
const {validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const modelUser = require('../models/Users')


const userController = {

    registerView : (req, res) =>{res.render("register")},
    
    registerProcess : (req, res)=>{


        // let validations = validationResult(req)
        // res.render(req.body)
        // if(validations.errors.length > 0){
        //     res.render('register', {errors : validations.mapped(), oldData : req.body})
        // }

        let foundByUserName = modelUser.findByField('userName', req.body.userName)

        if(foundByUserName){
            res.render('register', {
                errors: {
                    userName: {
                        msg: "Este nombre de usuario ya esta registrado"
                    }
                }
            })
        }

        let foundByEmail = modelUser.findByField("email", req.body.email);

        if(foundByEmail){
            res.render('register', {
                errors: {
                    email: {
                        msg: "Este email ya se encuentra registrado"
                    }
                },
                oldData: req.body})
        }

        let emailValidation = function(){
            if(req.body.email == req.body.validate_email){
                return true
            } else {
                return false
            }
        }

         if(emailValidation == true){
             res.render('register',{
                 errors: {
                     email: {
                         msg: "Los emails ingresados no coinciden"
                     },

                     validate_email: {
                         msg: "Los emails ingresados no coinciden"
                     }
                 }
             })
         }

        if(req.body.password != req.body.confirm_password){
            res.render('register', {
                errors: {
                    password: {
                        msg: "Las contraseñas no coindicen"
                    },
                    confirm_password: {
                        msg: "Las contraseñas no coinciden"
                    }
                },
                oldData: req.body})
        }

        if(req.body.termsAndConditions != "on"){
            res.render('register', {
                errors: {
                    termsAndConditions: {
                        msg: "Debes aceptar los terminos y condiciones para poder completar el registro"
                    }
                },
                oldData: req.body})
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: "img-avatars/" + req.file.filename,
        }

        modelUser.create(userToCreate)
        res.redirect('/')

    },

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
        }    
    }
  
}


module.exports = userController;