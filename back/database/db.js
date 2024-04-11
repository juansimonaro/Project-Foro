import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config({path: './settings/.env'})

export const sql = createPool({
    host: process.env.LOCAL_HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: ""
})