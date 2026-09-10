import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: ''
    };
  }

  evitarSubmit(event) {
    event.preventDefault();
    this.props.history.push('/searchResults/' + this.state.texto);
  }

  controlarCambios(event) {
    this.setState({ texto: event.target.value });
  }

  render() {
    return (
      <form onSubmit={(event) => this.evitarSubmit(event)}>
        <input
          type="text"
          onChange={(event) => this.controlarCambios(event)}
          value={this.state.texto}
        />
        <input type="submit" value="Buscar" />
      </form>
    );
  }
}

export default withRouter(Formulario);