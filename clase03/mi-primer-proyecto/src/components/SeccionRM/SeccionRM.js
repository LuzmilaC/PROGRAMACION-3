import React, { Component } from 'react';
import RMcard from '../RMcard/RMcard';

class SeccionRM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personajes: [],
      personajesFiltrados: [],
      busqueda: '',
      siguientePagina: 'https://rickandmortyapi.com/api/character'
    };
  }

  componentDidMount() {
    this.pedirPersonajes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.busqueda !== this.state.busqueda) {
      this.filtrarPersonajes(this.state.busqueda);
    }
  }

  pedirPersonajes() {
    fetch(this.state.siguientePagina)
      .then(response => response.json())
      .then(data => {
        let nuevosPersonajes = this.state.personajes.concat(data.results);
        this.setState({
          personajes: nuevosPersonajes,
          personajesFiltrados: nuevosPersonajes,
          siguientePagina: data.info.next
        });
      })
      .catch(error => console.log('El error fue: ' + error));
  }

  borrarPersonaje(id) {
    this.setState({
      personajes: this.state.personajes.filter(personaje => personaje.id !== id),
      personajesFiltrados: this.state.personajesFiltrados.filter(personaje => personaje.id !== id)
    });
  }

  filtrarPersonajes(textoAFiltrar) {
    let resultado = this.state.personajes.filter(function (personaje) {
      return personaje.name.toLowerCase().includes(textoAFiltrar.toLowerCase());
    });
    this.setState({ personajesFiltrados: resultado });
  }

  evitarSubmit(event) {
    event.preventDefault();
  }

  controlarCambios(event) {
    this.setState({ busqueda: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.evitarSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.controlarCambios(event)}
            value={this.state.busqueda}
          />
        </form>

        <section className='character-list'>
          {this.state.personajesFiltrados.length === 0 ? (
            <p>Cargando...</p>
          ) : (
            this.state.personajesFiltrados.map(personaje => (
              <RMcard
                key={personaje.id}
                personaje={personaje}
                onBorrar={(id) => this.borrarPersonaje(id)}
              />
            ))
          )}
        </section>

        <button onClick={() => this.pedirPersonajes()}>Más personajes</button>
      </div>
    );
  }
}

export default SeccionRM;