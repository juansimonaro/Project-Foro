import { Router } from "express";
import multer from "multer";
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { SaveImage } from "../controllers/image.controller.js";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const diskStorage = multer.diskStorage({
    destination: path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        cb(null, Date.now()+ '-' + file.originalname);
    } 
});

const fileUpload = multer({
    storage: diskStorage,
}).single('image');

router.post('/api/images', fileUpload,  async (req, res) => {
    await SaveImage(req, res)
    
    /*try {
        const picture = req.file.originalname;
        const type = req.file.mimetype;
        const data = fs.readFileSync(path.join(__dirname, '../images/' + req.file.filename));

        const Query = 'INSERT INTO publications SET ?';
        const publicationData = { picture, type, data };
        const [result] = sql.query(Query, publicationData);

        console.log(req.file)
        res.status(200).json({message: "registrado correctamente"});
    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }*/
});

export default router;