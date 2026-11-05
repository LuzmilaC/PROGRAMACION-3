import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./screens/Home/Home";
import AboutUs from "./screens/AboutUs/AboutUs";
import NotFound from "./screens/NotFound/NotFound";
import Personajes from "./screens/Personajes/Personajes";
import UnPersonaje from "./screens/UnPersonaje/UnPersonaje";
import SearchResults from './components/SearchResults/SearchResults';
import Favoritos from "./screens/Favoritos/Favoritos"
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/aboutUs" component={AboutUs} />
      <Route path="/personajes" component={Personajes} />
      <Route path="/unPersonaje/:id" component={UnPersonaje} />
      <Route path="/searchResults/:texto" component={SearchResults} />
      <Route path="/favoritos" component={Favoritos} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="*" component={NotFound} />  

    </Switch>
  );
}

export default App;