const modelUser = require('../models/Users');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
	let userFromCookie = modelUser.findByField('email', emailInCookie);
    if (userFromCookie) {
            req.session.usuarioLogueado = userFromCookie;
        }

if (req.session && req.session.usuarioLogueado) {
        res.locals.isLogged = true;
        res.locals.usuarioLogueado = req.session.usuarioLogueado;
    }


    next();
}

module.exports = userLoggedMiddleware;