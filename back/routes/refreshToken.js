import { Router } from "express";

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Refresh Token');
})

export default routes;