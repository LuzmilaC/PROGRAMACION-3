
import React from 'react';
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import NotFound from "./screens/NotFound/NotFound";
import Personajes from "./screens/Personajes/Personajes";
import UnPersonaje from "./screens/UnPersonaje/UnPersonaje";

function App () {
   root.render(
 <BrowserRouter>
   <App />
 </BrowserRouter>
);


   <Switch>
<Route path="/" exact={true} component={Home}/>
<Route path="/aboutUs" component={aboutUs}/>
<Route path="/Personajes" component={Personajes}/>
<Route path="/UnPersonaje/id/:id" component={UnPersonaje} />
<Route path="*" component={NotFound}/>
</Switch>
   
}


export default App;
