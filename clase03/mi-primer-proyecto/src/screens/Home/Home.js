import React from "react";
import Menu from "../../components/Menu/Menu";
import Main from "../../components/Main/Main";
import Personajes from "../../components/Personajes/Personajes";
import Contador from "../../components/Contador/Contador";
import SeccionRM from "../../components/SeccionRM/SeccionRM";


function Home () {
 return (
    <div>
        <Menu
  menuItems={[
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutUs" },
    { label: "Personajes", path: "/Personajes" }
  ]}
  usuario="Walter White"
/>
       
       <h1>My App in React</h1>
       <Main/>
      
      <h2>Personajes de películas</h2>
      <Personajes/>

        <h2>Personajes de Rick and Morty</h2>
      <SeccionRM/>
      
      
      <footer>
        <p>Copyright © Dashboard 2022</p>
    </footer>

    <Contador/>
    </div>
    
 );
}

export default Home

