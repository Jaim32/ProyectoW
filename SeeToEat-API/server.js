import express from 'express'
import { connectiondb } from './src/config/dbConnection.config.js';
import 'dotenv/config';
import userRoutes from './src/routes/user.route.js';
import restaurantRoutes from './src/routes/restaurant.route.js';


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rutas
app.use('/api/usuarios', userRoutes);
app.use('/api/restaurantes', restaurantRoutes);

// Conexión a la base de datos
connectiondb();

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
