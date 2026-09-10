import React from "react";
import { Link } from 'react-router-dom';

function Menu (props) {
    return(
        <nav>
            <ul className="main-nav">
                {props.menuItems.map((item, index) => (
                    // Accedemos a la propiedad del objeto (ejemplo: item.label o item.nombre)
                    <li key={index}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>

            <ul className="user">
                <li>{props.usuario} <img src="./img/user.jpg" alt=""/></li>
            </ul>

            <ul className="menu">
                <li> <Link to="/" >Home</Link> </li>
                <li> <Link to="/AboutUs" >AboutUs</Link> </li>
                <li> <Link to="/Personajes" >Personajes</Link> </li>
                <li> <Link to="*" >NotFound</Link> </li>
                <li><Link to="/favoritos">Favoritos</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;