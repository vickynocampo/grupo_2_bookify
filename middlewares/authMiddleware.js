//Este middleware hara lo contrario que guestMiddleware: si no hay nadie loguedo sera enviado al login
function authMiddleware(req, res, next) {
    if (!req.session.usuarioLogueado) { //Ya la creamos previamente en el controller durante el proceso de Login con los datos del usuario que vienen del formulario
        return res.redirect("/user/login")
    } //Si no hay alguien logueado quiero enviarlo al login
    next();//Si hay, que siga el proceso de peticiones del request y lo lleve a profile
}

module.exports = authMiddleware;