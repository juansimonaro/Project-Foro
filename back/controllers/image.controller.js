import { sql } from "../database/db.js";
import fs from "fs";
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// crea la conexion con la bd para almacenar la imagen
export const SaveImage =async (req, res) => {
    try {
        const {title, content} = req.body;
        const type = req.file.mimetype;
        const picture = req.file.originalname;
        const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename));

        const Query = `INSERT INTO publications(title, content, picture, type, data) 
                        VALUES (?, ?, ?, ?, ?)`;
        const publicationData = [ title, content ,picture, type, data ];

        const [result] = await sql.query(Query, publicationData);

        
        res.status(200).send('Imagen guardada correctamente');
        res.json({
            id_publications: result.insertId,
            title,
            content,
            picture, 
            type,
            data
        });
        alert("Publicado!")
    } catch (error) {
        return res.status(500).json({ERRORRRR: error.message});
    }
}

export const RecibeData = (req, res) => {
    const {title, content} = req.body;

    console.log(title, content)
}