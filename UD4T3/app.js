const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended:true }));

const baseDeDatos = require('./public/baseDeDatos.js');

app.get('/', (req, res) => {
    res.render('formulario.ejs');
});

app.post('/usuario', (req, res) => {
    let usuario = {
        dni: req.body.formDni,
        nombre: req.body.formUsuarioNombre,
        apellidos: req.body.formApellidos,
        contrasena: req.body.formContrasena,
        email: req.body.formEmail,
        telefono: req.body.formTelefono
    };

    baseDeDatos.validarUsuario(usuario.dni, usuario.nombre, usuario.apellidos, usuario.contrasena, usuario.email, usuario.telefono).then((mensajeResultante) => {
        res.render('usuariocreado.ejs', {dniUsuarioReg:usuario.dni, nombreUsuarioReg: usuario.nombre, apellidosUsuarioReg:  usuario.apellidos,
        contrasenaUsuarioReg:usuario.contrasena, emailUsuarioReg:usuario.email, telefonoUsuarioReg: usuario.telefono});
    }).catch((mensajeResultante) => {
        res.render('usuarioerr.ejs', { mensajeError: mensajeResultante });
    });
});

app.listen(3000, () => {
    console.log('servidor escuchando por el puerto 3000');
});
