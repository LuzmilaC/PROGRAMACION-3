import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main"
import Personajes from "./components/Personajes/Personajes";
import Contador from "./components/Contador/Contador";

function App() {
 return (
    <div>
       <Menu menuItems={["ADMIN", "Pages", "Charts", "Tables"]} 
    usuario="Walter White"
      />
       <h1>My App in React</h1>
       <Main/>
      
      <h2>Personajes de películas</h2>
      <Personajes/>
      
      <footer>
        <p>Copyright © Dashboard 2022</p>
    </footer>
    <Contador/>
    </div>
    
 );
}

export default App;
