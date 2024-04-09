import { Link, useNavigate } from "react-router-dom"

export const NavBar = () => {
    
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active btn_nav"
                                    onClick={() => navigate('dash/')}>
                                    <i className="fa-solid fa-house"></i>
                                    Inicio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active btn_nav"
                                    onClick={() => navigate('dash/publicar')}>
                                    <i className="fa-solid fa-pen-nib"></i>
                                    Publicar
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active btn_nav"
                                    onClick={() => navigate('dash/Comunidades')}>
                                    <i className="fa-solid fa-people-group"></i>
                                    Comunidades
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active btn_nav"
                                    onClick={() => navigate('dash/chat')}>
                                    <i className="fa-solid fa-comments"></i>
                                    Chat
                                </a>
                            </li>
                        </ul>


                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-light link_of_user" to="/">
                                    <span className="bord_user">
                                        <i className="fa-solid fa-user"></i>
                                    </span>
                                    Usuario
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active btn_nav"
                                    onClick={() => navigate('/signup')}>
                                    <i className="fa-solid fa-door-open"></i>
                                    Salir
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}