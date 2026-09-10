import React, { Component } from "react";

class UnPersonaje extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personaje: null
    };
  }

  componentDidMount() {
    // 1. Obtener el id que llega por props de navegación
    const id = this.props.match.params.id;

    // 2. Traer los datos del personaje desde la API
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ personaje: data });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { personaje } = this.state;

    // Mostrar mensaje de carga mientras fetch obtiene la información
    if (personaje === null) {
      return <h2>Cargando...</h2>;
    }

    // Una vez cargados los datos, los leemos desde el estado
    return (
      <div>
        <section>
          <div>El id del personaje es: {personaje.id}</div>
          <div>nombre: {personaje.name}</div>
          <div>status: {personaje.status}</div>
          <div>species: {personaje.species}</div>
          <div>type: {personaje.type || 'N/A'}</div>
          <div>gender: {personaje.gender}</div>
          <div>origin: {personaje.origin.name}</div>
        </section>
      </div>
    );
  }
}

export default UnPersonaje;