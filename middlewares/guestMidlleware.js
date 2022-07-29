//Este middleware se usara en el archivo de rutas para saber si tengo a alguien en session, y de ser asi, que automaticamente lo dirija a su profile
function guestMiddleware(req, res, next) {
    if (req.session.usuarioLogueado) { //Ya la creamos previamente en el controller durante el proceso de Login con los datos del usuario que vienen del formulario
        return res.redirect("/user/"+req.session.usuarioLogueado.id+"/detail")
    } //Si hay alguien logueado quiero enviarlo a su perfil
    next();//Si no hay nadie, que siga el proceso de peticiones del request
}

module.exports = guestMiddleware;