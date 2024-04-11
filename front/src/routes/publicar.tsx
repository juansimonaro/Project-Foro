// FormularioImagen.js
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

export const Publicar = () =>  {
    const [title, setTitulo] = useState('');
    const [content, setContenido] = useState('');
    const [imagen, setImagen] = useState(null);
    const goTo = useNavigate();

    const manejarCambioTitulo = e => {
        setTitulo(e.target.value);
    };

    const manejarCambioContenido = e => {
        setContenido(e.target.value);
    };

    const manejarCambioImagen = e => {
        setImagen(e.target.files[0]);
    };

    const manejarEnvio = async e => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('content', content);
            formData.append('imagen', imagen);
            const response = await axios.post('http://localhost:5000/images', formData);
            
            if (response.status === 200) {
                // Limpia los campos aquí
                setTitulo('');
                setContenido('');
                setImagen(null);
            }
        } catch (error) {
            return console.log(error)
        }
        
    };

    return (
        <div>
            <br />
            <form className="from-sty px-2" onSubmit={manejarEnvio}>
                <label className="col-form-label">Título:
                    <input required id='title' className="form-control input" type="text" value={title} onChange={manejarCambioTitulo} />
                </label>
                <label className="col-form-label">Contenido:
                    <textarea required id='content' className="form-control input"value={content} onChange={manejarCambioContenido} />
                </label>
                <label className="col-form-label">Imagen:
                    <input id='image' className="form-control input" type="file" onChange={manejarCambioImagen} />
                </label>
                <br />
                <button type="submit" className="btn btn-primary w-100">Crear publicación</button>
            </form>
        </div>
    );
}