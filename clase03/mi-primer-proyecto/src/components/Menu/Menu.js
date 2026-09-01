import React from "react";
import { Link } from 'react-router-dom';


function Menu (props) {
    return(
    <nav>
        <ul className="main-nav">
                {props.menuItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul className="user">
                <li>{props.usuario} <img src="./img/user.jpg" alt=""/></li>
            </ul>

            <ul className="menu">
                <li> <Link to="/" >Home</Link> </li>
                <li> <Link to="/AboutUs" >AboutUs</Link> </li>
                <li> <Link to="/Personajes" >Personajes</Link> </li>
                <li> <Link to="/UnPersonaje/id/:id" >UnPersonaje</Link> </li>
                <li> <Link to="/UnPersonaje/id/:id" >UnPersonaje</Link> </li>
                <li> <Link to="*" >NotFound</Link> </li>
     
            </ul>
    
        </nav>
    )
}

export default Menu