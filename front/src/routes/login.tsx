import { useState, useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../auth/constans";
import { useAuth } from "../auth/AuthProvided";
import axios from "axios";
import { Default } from "../layouts/Default.layouts";
import swal from "sweetalert";

export const Login = () =>  {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [errorResponse, setErrorResponse] = useState("");
    const goTo = useNavigate();
    const auth = useAuth();

    const manejarCambioUsuario = e => {
        setUsuario(e.target.value);
    };

    const manejarCambioPass = e => {
        setPassword(e.target.value);
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('usuario', usuario);
            formData.append('password', password);
            const response = await axios.post(`http://localhost:5000/api/login`, formData);

            if (response.status === 200) {
                console.log('usuario autenticado');
                goTo('/dash')
            } else {
                swal('usuario o contraseña incorrecto');
                setErrorResponse(response.data.error);
            }
        } catch (error) {
            return console.log(error)
        }
    };
    if (auth.isAuthenticated) {
        return <Navigate to="/dash"/>
    }
    return (
        <Default>
            <form className="from-sty px-2" onSubmit={manejarEnvio}>
                <label className="col-form-label">Usuario:
                    <input 
                        className="form-control input" 
                        type="text" 
                        value={usuario} 
                        onChange={manejarCambioUsuario} />
                </label>
                <label className="col-form-label">Contraseña:
                    <input 
                        className="form-control input" 
                        type="password" 
                        value={password} 
                        onChange={manejarCambioPass} />
                </label>
                <br />
                <button type="submit" className="btn btn-primary w-100">Crear publicación</button>
            </form>
        </Default>
    );
}