import React from "react";

function CharacterCard(props) {
  return (
    <div className="character-card">
      <img src={props.imagen} alt={props.nombre} />
      <h4>{props.nombre}</h4>
      <p>{props.descripcion}</p>
      <a href="#">Ver más</a>
    </div>
  );
}

export default CharacterCard;