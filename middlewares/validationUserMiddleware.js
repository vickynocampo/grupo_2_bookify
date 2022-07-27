const {body} = require('express-validator');
const path = require('path');

const validations = [
    body('userName').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
]

module.exports = validations