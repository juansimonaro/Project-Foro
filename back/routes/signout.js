import { Router } from "express";

const routes = Router();

routes.get('/', (req, res) => {
    res.send('signout');
})

export default routes;