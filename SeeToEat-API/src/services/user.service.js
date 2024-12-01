import Usuario from '../models/user.model'

const crearUsuario = async (datos) => {
    const usuario = new Usuario(datos);
    return await usuario.save();
};

const obtenerUsuarios = async () => {
    return await Usuario.find();
};

const obtenerUsuarioPorId = async (id) => {
    return await Usuario.findById(id);
};

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId
};
