// server.js
import {Router} from 'express';
import multer from 'multer';
import { sql } from '../database/db.js';
import path from 'path';
import fs from 'fs';
const router = Router()
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage });

router.get('/images', async (req, res) => {
    try {
        const [result] = await sql.query(`SELECT * FROM publications ORDER BY fecha_creacion DESC`);


        res.json(result);
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
})

router.post('/images', upload.single('imagen'), async (req, res) => {
    try {
        let query = "INSERT INTO publications (title, content, image) VALUES (?, ?, ?)";
        let title = req.body.title;
        let content = req.body.content;
        let image = '/' + req.file.filename; // guarda la ruta del archivo en la base de datos
        let data = [title, content, image];
    
        await sql.query(query, data, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error al crear la publicación');
            }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensaje: error.message });
    }
});

export default router;