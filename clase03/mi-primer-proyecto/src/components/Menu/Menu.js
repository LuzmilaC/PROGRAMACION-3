import React from "react";

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
        </nav>
    )
}

export default Menu