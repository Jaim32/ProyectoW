const mongoose = require('mongoose');
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
    rol: {
        type: String,
        enum: ['usuario', 'administrador', 'propietario'],
        default: 'usuario'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Usuario', usuarioSchema);
