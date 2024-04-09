import friend from '../../public/img/autor.png'
import juan from '../../public/img/juan.jpg'
import endelkys from '../../public/img/Endelkys.jpg'
import daniel from '../../public/img/daniel.jpg'

export const Barr_Friends = () => {
    return (
        <div className="barr_friend">
            <form className="d-flex">
                <input className="form-control me-sm-3" type="search" placeholder="Search friend" />
                <button className="btn btn-primary my-2 my-sm-0">Search</button>
            </form>
            <br />
            <ul className="List_friends">
                <li className="list_of_friends">
                    <span className="picture">
                        <img src={juan} alt="" />
                    </span>
                    <div className='chat_como'>
                        <h3>Juan Simonaro</h3>
                        <p>mensaje que esta visualizand....</p>
                    </div>
                    <span className="punto gr"></span>
                </li>
                <li className="list_of_friends">
                    <span className="picture">
                        <img src={endelkys} alt="" />
                    </span>
                    <div className='chat_como'>
                        <h3>Endelkys Matos</h3>
                        <p>mensaje que esta visualizand....</p>
                    </div>
                    <span className="punto gr"></span>
                </li>
                <li className="list_of_friends">
                    <span className="picture">
                        <img src={daniel} alt="" />
                    </span>
                    <div className='chat_como'>
                        <h3>Daniel Rendon</h3>
                        <p>mensaje que esta visualizand....</p>
                    </div>
                    <span className="punto gr"></span>
                </li>
                <li className="list_of_friends">
                    <span className="picture">
                        <img src={friend} alt="" />
                    </span>
                    <div className='chat_como'>
                        <h3>Persona</h3>
                        <p>mensaje que esta visualizand....</p>
                    </div>
                    <span className="punto nr"></span>
                </li>
                <li className="list_of_friends">
                    <span className="picture">
                        <img src={friend} alt="" />
                    </span>
                    <div className='chat_como'>
                        <h3>Persona</h3>
                        <p>mensaje que esta visualizand....</p>
                    </div>
                    <span className="punto"></span>
                </li>
                <li className="list_of_friends">
                    <span className="picture">
                        <img src={friend} alt="" />
                    </span>
                    <div className='chat_como'>
                        <h3>Persona</h3>
                        <p>mensaje que esta visualizand....</p>
                    </div>
                    <span className="punto nr"></span>
                </li>
                <li className="list_of_friends">
                    <span className="picture">
                        <img src={friend} alt="" />
                    </span>
                    <div className='chat_como'>
                        <h3>Persona</h3>
                        <p>mensaje que esta visualizand....</p>
                    </div>
                    <span className="punto nr"></span>
                </li>
                <li className="list_of_friends">
                    <span className="picture">
                        <img src={friend} alt="" />
                    </span>
                    <div className='chat_como'>
                        <h3>Persona</h3>
                        <p>mensaje que esta visualizand....</p>
                    </div>
                    <span className="punto nr"></span>
                </li>
                <li className="list_of_friends">
                    <span className="picture">
                        <img src={friend} alt="" />
                    </span>
                    <div className='chat_como'>
                        <h3>Persona</h3>
                        <p>mensaje que esta visualizand....</p>
                    </div>
                    <span className="punto nr"></span>
                </li>
            </ul>
        </div>
    )
}