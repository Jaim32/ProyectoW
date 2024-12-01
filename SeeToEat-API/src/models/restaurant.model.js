import mongoose from 'mongoose';
const { Schema } = mongoose;

const comentarioSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    texto: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const menuItemSchema = new Schema({
    producto: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen: {
        type: String
    }
});

const restauranteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    ubicacionlink: {
        type: String,
        required: true
    },
    horaApertura: {
        type: String,
        required: true
    },
    horaCierre: {
        type: String,
        required: true
    },
    comentarios: [comentarioSchema],
    menu: [menuItemSchema],
    tipoComida: {
        type: String,
        required: true
    },
    propietario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
}, {
    timestamps: true
});

const Restaurante = mongoose.model('Restaurante', restauranteSchema);

// Exporta el modelo como default
export default Restaurante;
