let objetoAExportarAlFinal =  {}

objetoAExportarAlFinal.validarUsuario = function(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username !== 'amornun') {
                resolve("OK: Usuario no existente");
            } else {
                reject("ERROR: Usuario ya existente");
            }
        }, 2000);
    });
}

module.exports = objetoAExportarAlFinal;