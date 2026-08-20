import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";

const personajes = [
  { nombre: "Batman", descripcion: "Vigilante de Gotham City.", imagen: "/characters/batman.jpg" },
  { nombre: "Superman", descripcion: "El último hijo de Krypton.", imagen: "/characters/superman.jpg" },
  { nombre: "Capitán América", descripcion: "Súper soldado y líder de los Vengadores.", imagen: "/characters/capAmerica.jpg" },
  { nombre: "Doctor Strange", descripcion: "Hechicero supremo de la Tierra.", imagen: "/characters/strange.jpg" },
  { nombre: "Hulk", descripcion: "Científico que se transforma en gigante verde.", imagen: "/characters/hulkSmall.jpg" },
  { nombre: "Yoda", descripcion: "Maestro Jedi de 900 años.", imagen: "/characters/yoda.jpg" },
  { nombre: "Anakin Skywalker", descripcion: "Elegido que trae equilibrio a la Fuerza.", imagen: "/characters/anakin.jpg" },
  { nombre: "Kylo Ren", descripcion: "Caballero de Ren obsesionado con Vader.", imagen: "/characters/kyloRen.jpg" },
];

function Personajes() {
  return (
    <section className="character-list">
      {personajes.map((p, index) => (
        <CharacterCard
          key={index}
          nombre={p.nombre}
          descripcion={p.descripcion}
          imagen={p.imagen}
        />
      ))}
    </section>
  );
}

export default Personajes;