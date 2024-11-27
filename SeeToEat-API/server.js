const express = require('express');
const { connectiondb } = require('./src/config/dbConnection.config');
require('dotenv/config');

const userRoutes = require('./src/routes/user.route');
const restaurantRoutes = require('./src/routes/restaurant.route');

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
