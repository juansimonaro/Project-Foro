import car from '../../public/img/car.jpg';

export const Comunity = () => {
    return (
        <div className="content_comunity">
            <div className="img_comunity">
                <img src={car}/>
            </div>
            <div className="content_info_comunity">
                <div className="info_comunity">
                    <h2>La comunidad del auto</h2>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Aliquid adipisci possimus 
                        perferendis! Deleniti eveniet corporis aliquid 
                        labore, cupiditate numquam nostrum non debitis 
                        vel? Vel explicabo beatae ea facilis esse quod!</p>
                </div>
                <div className="barra_notifications bar_top">
                    <span><i className="fa-solid fa-magnifying-glass"></i>ver</span>
                    <span><i className="fa-solid fa-play"></i>unirse</span>
                    <span><i className="fa-solid fa-user-group"></i>1.000 miembros</span>
                </div>
            </div>
        </div>
    )
}