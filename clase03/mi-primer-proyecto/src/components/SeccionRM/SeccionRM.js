import React, { Component } from 'react';
import RMcard from '../RMcard/RMcard';

class SeccionRM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personajes: [],
      siguientePagina: 'https://rickandmortyapi.com/api/character'
      // acá guardamos la URL de la "próxima página" que nos da la API
    };
  }

  // Se ejecuta apenas se renderiza el componente por primera vez
  componentDidMount() {
    this.pedirPersonajes();
  }

  pedirPersonajes = () => {
    fetch(this.state.siguientePagina)
      .then(response => response.json())
      .then(data => {
        this.setState({
          // concat junta el array viejo con el array nuevo de resultados
          personajes: this.state.personajes.concat(data.results),
          siguientePagina: data.info.next // la API te da el link de la próxima página
        });
      })
      .catch(error => console.log('El error fue: ' + error));
  };

  // Método para borrar: nos quedamos con todos MENOS el que tiene ese id
  borrarPersonaje = (id) => {
    this.setState({
      personajes: this.state.personajes.filter(personaje => personaje.id !== id)
    });
  };

  render() {
    return (
      <div>
        <section className='cardContainer'>
          {this.state.personajes.length === 0 ? (
            <p>Cargando...</p>
          ) : (
            this.state.personajes.map(personaje => (
              <RMcard
                key={personaje.id}
                personaje={personaje}
                onBorrar={this.borrarPersonaje}
              />
            ))
          )}
        </section>

        {this.state.siguientePagina && (
          <button onClick={this.pedirPersonajes}>Más personajes</button>
        )}
      </div>
    );
  }
}

export default SeccionRM;