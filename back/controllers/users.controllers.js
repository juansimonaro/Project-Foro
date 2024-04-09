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

// comparar datos
export const CompareUser = async (req, res) => {
    try {
        const {usuario, password} = req.body;

        let pass = password;

        const [result] = await sql.query(
            `SELECT * FROM users WHERE usuario = ? AND pass = ?`,
            [usuario, pass]);
        
        if (result.length === 0) {
            // No se encontró ningún usuario con las credenciales proporcionadas
            return res.status(401).json({ mensaje: 'Credenciales inválidas' });
        }

    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }
}

// returnar contraseña hasheada
const comparePass = async (req, res) => {
    const {password} = req.body;
    const consulta = `SELECT pass FROM user WHERE pass = ?`

    const [result] = await sql.query(consulta, [pass]);

    if (result.length === 0) {
        // No se encontró ningún usuario con las credenciales proporcionadas
        return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }
    console.log(result);
    let isPasswordValid = bcrypt.compareSync(password, result[0].pass);

    return isPasswordValid;
}

export const compareEmail = async (req, res) => {
    try {
        const { email } = req.body;

        const consulta = `SELECT email FROM users WHERE email = ?`
        const [result] = await sql.query(consulta, [email]);

        return result > 0
    } catch (error) {
        return res.status(500).json({mensaje: error.message});
    }
    
}
