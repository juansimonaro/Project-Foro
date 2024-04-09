import { Router } from "express";
import { jsonResponse } from "../lib/jsonresponse.js";
import { CreateUser, compareEmail } from '../controllers/users.controllers.js'

const routes = Router();


routes.post('/', async (req, res) => {
    // recibe los datos
    const {usuario, email, password} = req.body;

    // validar que los datos recibidos son correctos
    if (!!!usuario || !!!email || !!!password) {
        return res.status(400).json(jsonResponse(400, {
            error: "Debes ingresar todos los datos"
        }));
    }

    try {
        // validar que haya un correo ya existente!!!
        //
        //   FALTA FUNCION DE VALIDACIÓN
        //
        // usuario creado
        await CreateUser(req, res);
        
    } catch (error) {
        console.error('Error interno del servidor:', error.message);
        return res.status(500).json(jsonResponse(500, {
            error: "Error interno del servidor"
        }));
    }
})

export default routes;