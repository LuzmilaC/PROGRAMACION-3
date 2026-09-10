import React, { Component } from 'react';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: []
    };
  }

  componentDidMount() {
    this.buscarPersonajes();
  }

  buscarPersonajes() {
    let texto = this.props.match.params.texto;
    fetch('https://rickandmortyapi.com/api/character/?name=' + texto)
      .then(response => response.json())
      .then(data => {
        this.setState({ resultados: data.results });
      })
      .catch(error => console.log('El error fue: ' + error));
  }

  render() {
    return (
      <div>
        {this.state.resultados.length === 0 ? (
          <p>Cargando...</p>
        ) : (
          this.state.resultados.map(personaje => (
            <div key={personaje.id}>
              <h3>{personaje.name}</h3>
              <img src={personaje.image} alt={personaje.name} />
            </div>
          ))
        )}
      </div>
    );
  }
}

export default SearchResults;