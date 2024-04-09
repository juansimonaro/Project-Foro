import { Link } from "react-router-dom";

interface DefaultProps {
    children: React.ReactNode
}

export const Default = ({children}: DefaultProps)=> {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" rel="stylesheet" to="/signup"> Signup</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                {children}
            </main>


        </div>
    )
}