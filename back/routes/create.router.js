import { Router } from "express";
import { CreateUser, ShowUsers } from "../controllers/users.controllers.js";

const router = Router();


router.get('/sign', ShowUsers);
router.post('/sign', CreateUser);

export default router;
