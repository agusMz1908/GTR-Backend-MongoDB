const express = require( 'express' );
const conectarDB = require( './config/db.js' );

//Creo el servidor
const server = express();

//Conexion a la BDD
conectarDB();

//Abro el puerto
const port = process.env.PORT || 5000;

//Habilitar leer los valores de un body
server.use(express.json());

//Rutas
server.use('/api/usuarios', require('./routes/usuarios'));
server.use('/api/equipos', require('./routes/equipos'));
server.use('/api/modelos', require('./routes/modelo'));
server.use('/api/estados', require('./routes/estado'));

//Encender el servidor
server.listen( port, '0.0.0.0', () => {
    console.log( `El servidor esta encendido en el puerto ${port}`);
});