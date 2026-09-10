import React, { Component } from 'react';
import RMcard from '../../components/RMcard/RMcard'; //

class Favoritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personajes: [],
      cargando: true
    };
  }

  componentDidMount() {
    // 1. Obtener la clave 'favoritos' del localStorage
    let recuperoStorage = localStorage.getItem('favoritos'); //
    let storage = JSON.parse(recuperoStorage); //

    if (storage !== null && storage.length > 0) { //
      let acumulador = [];

      // 2. Hacer fetch por cada ID guardado en el array
      storage.forEach(id => { //
        fetch('https://rickandmortyapi.com/api/character/' + id) //
          .then(response => response.json())
          .then(data => {
            acumulador.push(data); //

            // Cuando terminamos de cargar todos, actualizamos el estado
            if (acumulador.length === storage.length) {
              this.setState({
                personajes: acumulador,
                cargando: false
              });
            }
          })
          .catch(error => console.log(error));
      });
    } else {
      // Si no hay elementos guardados en localStorage
      this.setState({
        cargando: false
      });
    }
  }

  render() {
    // Si aún está pidiendo los datos a la API
    if (this.state.cargando) {
      return <h2>Cargando favoritos...</h2>; //
    }

    return (
      <div>
        <h2>Mis Personajes Favoritos</h2>

        {/* Si el array de personajes está vacío */}
        {this.state.personajes.length === 0 ? (
          <p>No tienes personajes agregados a favoritos.</p> //
        ) : (
          <section className='character-list'>
            {this.state.personajes.map(personaje => (
              <RMcard key={personaje.id} personaje={personaje} />
            ))}
          </section>
        )}
      </div>
    );
  }
}

export default Favoritos;