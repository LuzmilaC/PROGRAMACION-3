import React from "react";
import CharacterCard from "../CharacterCard/CharacterCard";

const personajes = [
  { id: 1, name: "Ashoka", img: "ahsoka.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", extra: 'StarWars' },
  { id: 2, name: "Anakin", img: "anakin.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", extra: 'StarWars' },
  { id: 3, name: "Batman", img: "batman.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", extra: 'DC Comics' },
  { id: 4, name: "Capitán América", img: "capAmerica.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", extra: 'Marvel' },
  { id: 5, name: "Cell", img: "cell.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", extra: 'DragonBall' },
  { id: 6, name: "Hulk", img: "hulkSmall.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", extra: 'Marvel' },
  { id: 7, name: "Kylo Ren", img: "kyloRen.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", extra: 'StarWars' },
  { id: 8, name: "Luke", img: "luke.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", extra: 'StarWars' },
  { id: 9, name: "Obi Wan", img: "obiwan.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", extra: 'StarWars' },
  { id: 10, name: "Dr. Strange", img: "strange.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", extra: 'Marvel' }
];

function Personajes() {
  return (
    <section className="character-list">
      {personajes.map((p) => (
        <CharacterCard
          key={p.id}
          name={p.name}
          description={p.description}
          img={p.img}
          extra={p.extra}
        />
      ))}
    </section>
  );
}

export default Personajes;
      
