import Restaurante from '../models/restaurant.model.js';

export const crearRestaurante = async (req, res) => {
    try {
        const { nombre, ubicacion, ubicacionlink, horaApertura, horaCierre, tipoComida, propietario, menu } = req.body;

        // Validaciones
        if (!nombre || !ubicacion || !ubicacionlink || !horaApertura || !horaCierre || !tipoComida || !propietario) {
            return res.status(400).json({ error: 'Todos los campos obligatorios deben ser enviados' });
        }

        const nuevoRestaurante = new Restaurante({
            nombre,
            ubicacion,
            ubicacionlink,
            horaApertura,
            horaCierre,
            tipoComida,
            propietario,
            menu
        });

        await nuevoRestaurante.save();
        res.status(201).json({ message: 'Restaurante creado exitosamente', restaurante: nuevoRestaurante });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const obtenerRestaurantes = async (req, res) => {
    try {
        const restaurantes = await Restaurante.find().populate('propietario comentarios.usuario');
        res.status(200).json(restaurantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerRestaurantePorId = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurante = await Restaurante.findById(id).populate('propietario comentarios.usuario');
        if (!restaurante) {
            return res.status(404).json({ error: 'Restaurante no encontrado' });
        }
        res.status(200).json(restaurante);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const agregarComentario = async (req, res) => {
    try {
        const { id } = req.params;
        const { usuario, texto } = req.body;

        const restaurante = await Restaurante.findById(id);
        if (!restaurante) {
            return res.status(404).json({ error: 'Restaurante no encontrado' });
        }

        restaurante.comentarios.push({ usuario, texto });
        await restaurante.save();

        res.status(201).json({ message: 'Comentario agregado exitosamente', restaurante });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const agregarMenuItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { producto, precio, descripcion, imagen } = req.body;

        const restaurante = await Restaurante.findById(id);
        if (!restaurante) {
            return res.status(404).json({ error: 'Restaurante no encontrado' });
        }

        restaurante.menu.push({ producto, precio, descripcion, imagen });
        await restaurante.save();

        res.status(201).json({ message: 'Item de menú agregado exitosamente', restaurante });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default {
    crearRestaurante,
    obtenerRestaurantes,
    obtenerRestaurantePorId,
    agregarComentario,
    agregarMenuItem
};
