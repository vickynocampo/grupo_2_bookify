const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const modelUser = require('../models/Users');
const { Console } = require('console');

const userController = {

    registerView: (req, res) => {res.render("register")},

    registerProcess: (req, res) => {
        const validations = validationResult(req);
        if (validations.errors.length > 0) {
            return res.render('register', {
                errors: validations.mapped(),
                OldData: req.body
            });
        }
        let foundByUserName = modelUser.findByField('userName', req.body.userName)
        if (foundByUserName) {
            res.render('register', {
                errors: {
                    userName: {
                        msg: "Este nombre de usuario ya esta registrado"
                    }
                }
            })
        }
        let foundByEmail = modelUser.findByField("email", req.body.email);
        if (foundByEmail) {
            res.render('register', {
                errors: {
                    email: {
                        msg: "Este email ya se encuentra registrado"
                    }
                },
                oldData: req.body
            })
        }
        let emailValidation = function () {
            if (req.body.email == req.body.validate_email) {
                return true
            } else {
                return false
            }
        }
        if (emailValidation == true) {
            res.render('register', {
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
        if (req.body.password != req.body.confirm_password) {
            res.render('register', {
                errors: {
                    password: {
                        msg: "Las contraseñas no coindicen"
                    },
                    confirm_password: {
                        msg: "Las contraseñas no coinciden"
                    }
                },
                oldData: req.body
            })
        }
        if (req.body.termsAndConditions != "on") {
            res.render('register', {
                errors: {
                    termsAndConditions: {
                        msg: "Debes aceptar los terminos y condiciones para poder completar el registro"
                    }
                },
                oldData: req.body
            })
        }
        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: "img-avatars/" + req.file.filename,
        }
        modelUser.create(userToCreate)
        res.redirect('/')
    },

    login: (req, res) => {res.render("login")},

    loginProcess: (req, res) => {
        let userToLogin = modelUser.findByField("email", req.body.email);
        if (userToLogin) {
            let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (isOkPassword) {
                delete userToLogin.password;
                delete userToLogin.confirm_password
                req.session.usuarioLogueado = userToLogin;
                return res.redirect(userToLogin.id + "/detail");
            }
            return res.render("login", { errors: { email: { msg: "Las credenciales son invalidas" } } });
        }
        return res.render("login", { errors: { email: { msg: "El email no se encuentra registrado" } } })
    },

    userDetail: (req, res) => {
        let idUser = parseInt(req.params.id, 10);
        let userFounded = {};
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === idUser) {
                userFounded = users[i]
                res.render("userDetail", {
                    user: userFounded,
                    userLoggged: req.session.usuarioLogueado
                })
            }
        }
    },

    editView: (req, res) => {
        let idUser = req.params.id;
        let userFounded = {};
        users.forEach(user => {
            if (user.id == idUser) {
                userFounded = user
                res.render("userEdit", { user: userFounded })
            }
        })
    },

    delete: (req, res) => {
        let idUser = req.params.id;
        modelUser.delete(idUser)
        res.send("Se elimino el usuario " + idUser)
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect("/");
    }
}

module.exports = userController;