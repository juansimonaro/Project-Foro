import autor from '../../public/img/autor.png'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Information } from '../layouts/laterals'

export const Publications = () => {
    const [Publication, setPublication] = useState([]);

    useEffect(() => {
        showPublications();
    }, [])
    const showPublications = () => {
        axios
            .get('http://localhost:5000/images')
            .then((res) => {
                console.log(res);
                setPublication(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='container'>
            <br />
            <div className='contenedor_of_all'>
                <Information />
                <div className='conter_public'>
                    {Publication.map((Publications) => (
                        <div className="card mb-3 from-sty" key={Publications.id_publications}>
                            <div className='autor_publicarion'>
                                <span className="circle">
                                    <img src={autor} className='autor'/>
                                </span>
                                <h3 className="card-header">Autor</h3>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{Publications.title}</h5>
                                <p className="card-text">{Publications.content}</p>
                            </div>
                            <div className='img_public'>
                                <img src={'http://localhost:5000'+Publications.image} title='Imagen publicada'/>
                            </div>

                            <div className='barra_notifications'>
                                <span><i className="fa-solid fa-thumbs-up"></i></span>
                                <span><i className="fa-solid fa-message"></i></span>
                                <span><i className="fa-solid fa-share-nodes"></i></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}