import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const { Schema } = mongoose;

const usuarioSchema = new Schema({
    usuario: {
        type: String,
        required: true,
        unique: true
    },
    contrasena: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Por favor ingresa un correo válido']
    },
    rol: {
        type: String,
        enum: ['usuario', 'administrador', 'propietario'],
        default: 'usuario'
    }
}, {
    timestamps: true
});

// Middleware para hashear la contraseña antes de guardar
usuarioSchema.pre('save', async function (next) {
    if (!this.isModified('contrasena')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.contrasena = await bcrypt.hash(this.contrasena, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Método para verificar la contraseña
usuarioSchema.methods.verificarContrasena = async function (contrasena) {
    return await bcrypt.compare(contrasena, this.contrasena);
};

const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;
