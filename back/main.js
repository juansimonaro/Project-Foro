import express from 'express'
import morgan from 'morgan'
import cors from 'cors';
import dotenv from 'dotenv';
import {
    login,
    signup,
    signout,
    todos,
    user,
    refresh } from './routes/all.Routes.js';
import router from './controllers/public.controller.js'

 // asignacion de puerto
dotenv.config({
    path: './settings/.env'
})
const port = process.env.PORT || 3000;

// asignando express a app
const app = express()

// validar que solo se conecte al puerto correcto
app.use(cors());

app.use(morgan('dev'));

// procesar los datos del cliente
app.use(express.json());

// rutas estaticas
app.use('/images', express.static('images'));

// rutas 
app.use('/api/login', login);
app.use('/api/signup', signup);
app.use('/api/signout', signout);
app.use('/api/todos', todos);
app.use('/api/user', user);
app.use('/api/refresh', refresh);
app.use(router);

// configuración del servidor
app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`)
})