import { NavBar } from "./nav.tsx";
import { Publicar } from "./publicar.tsx";
import { Routes, Route } from "react-router-dom";
import { Publications } from "./publications.tsx";
import { Comunidades } from "./comunidades.tsx";
import { Chat } from './chat.tsx'

export const routes = [
    { name: "Publications", path: "/dash/", component: Publications },
    { name: "Publicar", path: "dash/publicar", component: Publicar },
    { name: "Comunidades", path: "dash/comunidades", component: Comunidades },
    { name: "Chat", path: "dash/chat", component: Chat },
]

export const Dash = () => {
    return (
        <div>
            <NavBar />  
            <div className=''> 
                {/* Agrega un comodín al final de la ruta principal */}

                <Routes>  
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} element={<route.component />} />
                    ))}
                    <Route path="*" element={<Publications />} />
                </Routes>
            </div>
        </div>
    );
};