import { Router } from "express";
import { jsonResponse } from "../lib/jsonresponse.js";
import { CompareUser } from "../controllers/users.controllers.js";
import bcrypt from 'bcrypt';
import { sql } from "../database/db.js";

const routes = Router();

routes.post('/', async (req, res) => {
    // recibe los datos
    const {usuario, password} = req.body;

    // validar que los datos recibidos son correctos
    if (!!!usuario || !!!password) {
        return res.status(400).json(jsonResponse(400, {
            error: "Debes ingresar todos los datos"
        }));
    }
    let pass = await bcrypt.hash(password, 8);
    if(usuario && password){

        const query = `SELECT * FROM users WHERE usuario = ?`;
        sql.query(query, [usuario], async (error, result) => {

            // validar que no hayan usuarios registrados con este nombre de usuario y contraseña
            if(result.length == 0 || !(await bcrypt.compare(password, result[0].password))){
                res.send('Usiario o Contraseña incorrecta')
            }else{
                res.send('Usuario  autenticado')
            }
        })
    }
    // autenticar
    const auth = await CompareUser(req, res)
    const accessToken = "access_token";
    const refreshToken = "refresh_token";
    const user = {usuario}

    res.status(200).json(jsonResponse(200, {
        message: 'usuario correcto',
        auth,
        user,
        accessToken,
        refreshToken
    }));
})

export default routes;