import { Default } from "../layouts/Default.layouts";
import { useState } from "react";
import { useAuth } from "../auth/AuthProvided";
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../auth/constans";
import { AuthResponseError } from "../types/types";

export const Signup = () => {

    const [usuario, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [errorResponse, setErrorResponse] = useState("");

    const auth = useAuth();

    const goTo = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/signup`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    usuario,
                    email,
                    password
                })
            })
            if (response.ok) {
                console.log('usuario creado');
                setErrorResponse("")
                goTo('/')
            } else {
                console.error('error al crear usuario');
                const json = await response.json() as AuthResponseError;
                setErrorResponse(json.body.error);
                return
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    if (auth.isAuthenticated) {
        return <Navigate to="/dash"/>
    }

    return (
        <Default>
            <form className="from-sty px-2" onSubmit={handleSubmit}>
                {!!errorResponse && (
                        <div className="px-5">
                            <div className="alert alert-danger" role="alert">
                                <strong>Ups! {errorResponse} </strong> 
                            </div>
                        </div>
                    )
                }
                <h1 className="margin">Sig in</h1>

                <div>
                    <label htmlFor="user" className="col-sm-2 col-form-label">User</label>
                    <input 
                        type="text" 
                        value={usuario}
                        className="form-control"
                        onChange={(e) => setUser(e.target.value)}    
                    />
                </div>
                <div>
                    <label htmlFor="user" className="form-label mt-4">Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        className="form-control" 
                        onChange={(e) => setEmail(e.target.value)}    
                    />
                </div>
                <div>
                    <label htmlFor="password" className="form-label mt-4">Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        className="form-control" 
                        id="exampleInputPassword1"
                        onChange={(e) => setPass(e.target.value)}    
                    />
                </div> 
                <br />       
                <button className="btn btn-primary w-100">
                    Crear
                </button>
            </form>   
        </Default>
    )
}