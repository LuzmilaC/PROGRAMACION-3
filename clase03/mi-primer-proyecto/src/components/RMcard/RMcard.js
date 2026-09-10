import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RMcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarOrigen: false,
      esFavorito: false
    };
  }

  componentDidMount() {
    // 1. Revisar en localStorage si el personaje ya es favorito
    let recuperoStorage = localStorage.getItem('favoritos');
    let storage = JSON.parse(recuperoStorage);

    if (storage !== null) {
      if (storage.includes(this.props.personaje.id)) {
        this.setState({
          esFavorito: true
        });
      }
    }
  }

  toggleOrigen = () => {
    this.setState({ mostrarOrigen: !this.state.mostrarOrigen });
  };

  agregarFav() {
    let id = this.props.personaje.id;
    let recuperoStorage = localStorage.getItem('favoritos');
    let storage = JSON.parse(recuperoStorage);

    if (storage !== null) {
      storage.push(id);
      let storageString = JSON.stringify(storage);
      localStorage.setItem('favoritos', storageString);
    } else {
      let primerArray = [id];
      let storageString = JSON.stringify(primerArray);
      localStorage.setItem('favoritos', storageString);
    }

    this.setState({
      esFavorito: true
    });
  }

  sacarFav() {
    let id = this.props.personaje.id;
    let recuperoStorage = localStorage.getItem('favoritos');
    let storage = JSON.parse(recuperoStorage);

    let storageFiltrado = storage.filter(function(favId) {
      return favId !== id;
    });

    let storageString = JSON.stringify(storageFiltrado);
    localStorage.setItem('favoritos', storageString);

    this.setState({
      esFavorito: false
    });
  }

  render() {
    const { personaje, onBorrar } = this.props;

    return (
      <article className='character-card'>
        <img src={personaje.image} alt={personaje.name} />

        <h4>{personaje.name}</h4>
        <p>{personaje.status} - {personaje.species}</p>

        {/* Botón condicional para agregar o sacar de favoritos */}
        {this.state.esFavorito ? (
          <button onClick={() => this.sacarFav()}>
            Sacar de favoritos
          </button>
        ) : (
          <button onClick={() => this.agregarFav()}>
            Agregar a favoritos
          </button>
        )}

        <button className='more' onClick={this.toggleOrigen}>
          {this.state.mostrarOrigen ? 'Ver menos' : 'Ver más'}
        </button>
          
        <section className={this.state.mostrarOrigen ? '' : 'oculto'}>
          <p>Origen: {personaje.origin.name}</p>
        </section>

        <Link to={'/unPersonaje/' + personaje.id}>Ver detalle</Link>

        {onBorrar && (
          <button className='delete' onClick={() => onBorrar(personaje.id)}>
            Borrar
          </button>
        )}
      </article>
    );
  }
}

export default RMcard;