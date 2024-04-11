import express from 'express'
import morgan from 'morgan'
import cors from 'cors';
import dotenv from 'dotenv';
import {
    login,
    signup,
    user } from './routes/all.Routes.js';
import router from './controllers/public.controller.js'
import { fileURLToPath } from 'url';
import path from 'path';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


 // asignacion de puerto
dotenv.config({
    path: './settings/.env'
})
const port = process.env.PORT || 3000;

// asignando express a app
const app = express()

// validar que solo se conecte al puerto correcto
app.use(cors());
app.use(express.static(path.join(__dirname, 'images')));
app.use(morgan('dev'));

// procesar los datos del cliente
app.use(express.json());

// rutas estaticas


// rutas 
app.use('/api/login', login);
app.use('/api/signup', signup);
app.use('/api/user', user);
app.use(router);

// configuración del servidor
app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`)
})