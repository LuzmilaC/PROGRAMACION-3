import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Link } from '/unPersonaje/${id}'; //este es el punto 10


class RMcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarOrigen: false
    };
  }

  toggleOrigen = () => {
    this.setState({ mostrarOrigen: !this.state.mostrarOrigen });
  };

  render() {
    const { personaje, onBorrar } = this.props;

    return (
      <article className='character-card'>
        <img src={personaje.image} alt={personaje.name} />

        <h2>{personaje.name}</h2>
        <p>{personaje.status}</p>
        <p>{personaje.species}</p>

        <button className='more' onClick={this.toggleOrigen}>
          Ver más
        </button>
         
        <section className={this.state.mostrarOrigen}>
          <p>Origen: {personaje.origin.name}</p>
        </section>
        

        <button className='delete' onClick={() => onBorrar(personaje.id)}>
          Borrar
        </button>
      </article>
    );
  }
}

export default RMcard;