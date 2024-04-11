import { sql } from '../database/db.js';
import  bcrypt  from 'bcryptjs';

// mostrar todos los usuarios
export const ShowUsers = async (req, res) => {
    try {
        const [result] = await sql.query(`SELECT * FROM users ORDER BY usuario`)
        res.json(result)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
// registrar usuarios
export const CreateUser = async (req, res) => {
    try {
        const { usuario, email, password } = req.body;

        // Hashea la contraseña
        let pass = await bcrypt.hash(password, 8);

        // Consulta SQL con el valor hasheado
        const query = "INSERT INTO users (usuario, email, pass) VALUES (?, ?, ?)";
        const [result] = await sql.query(query, [usuario, email, pass]);

        console.log(result);
        res.json({
            id: result.insertId,
            usuario,
            email,
            pass
        });
    } catch (error) {
        return res.status(500).json({ mensaje: error.message });
    }
};
