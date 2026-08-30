import React, { Component } from "react";

class Contador extends Component {

    constructor(props) {
    super(props);
 //para que el contador arranque en 0
    this.state = {
      numeroDeClicks: 0
    };
  }

  incrementar() {
    //para que valla incrementando de a 1
    this.setState({
      numeroDeClicks: this.state.numeroDeClicks + 1
    });
  }

  render() {
    return (
      <div>
        <p>Cantidad de clicks: {this.state.numeroDeClicks}</p>
        <button onClick={() => this.incrementar()}>Click aquí para contar</button>
      </div>
    );
  }
}

export default Contador;