import Restaurante from '../models/restaurant.model'

const crearRestaurante = async (datos) => {
    const restaurante = new Restaurante(datos);
    return await restaurante.save();
};

const obtenerRestaurantes = async () => {
    return await Restaurante.find().populate('propietario comentarios.usuario');
};

const obtenerRestaurantePorId = async (id) => {
    return await Restaurante.findById(id).populate('propietario comentarios.usuario');
};

module.exports = {
    crearRestaurante,
    obtenerRestaurantes,
    obtenerRestaurantePorId
};
