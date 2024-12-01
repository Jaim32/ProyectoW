import Usuario from '../models/user.model.js';
import jwt from 'jsonwebtoken';

export const crearUsuario = async (req, res) => {
    try {
        const { usuario, contrasena, correo, rol } = req.body;

        if (!correo) {
            return res.status(400).json({ error: 'El campo `correo` es obligatorio' });
        }

        const nuevoUsuario = new Usuario({ usuario, contrasena, correo, rol });
        await nuevoUsuario.save();

        res.status(201).json({ message: 'Usuario creado exitosamente', usuario: nuevoUsuario });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerUsuarioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findById(id);
        if (!usuario) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioEliminado = await Usuario.findByIdAndDelete(id);
        if (!usuarioEliminado) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const iniciarSesion = async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;

        // Busca el usuario en la base de datos
        const usuarioExistente = await Usuario.findOne({ usuario });
        if (!usuarioExistente) {
            return res.status(404).json({ error: 'Usuario o contraseña incorrectos' });
        }

        // Verifica la contraseña
        const esContrasenaValida = await usuarioExistente.verificarContrasena(contrasena);
        if (!esContrasenaValida) {
            return res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
        }

        // Genera el token JWT
        const token = jwt.sign(
            { id: usuarioExistente._id, rol: usuarioExistente.rol },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // Expira en 1 hora
        );

        res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    eliminarUsuario,
    iniciarSesion
};
