import React, { Component } from "react";

class CharacterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {oculto: true};
  }

  verMas() {
    this.setState({
      oculto: !this.state.oculto
    });
  }

  render() {
    return (
      <div className="character-card">
        <img src={`/characters/${this.props.img}`} alt={this.props.name} />        
        <h4>{this.props.name}</h4>
        <p>{this.props.description}</p>
        
        <a href="#"></a>
        <p className={this.state.oculto ? "info-adicional oculto" : "info-adicional"}>
          {this.props.infoExtra}
        </p>

        <a href="#" onClick={() => this.verMas()}>
          {this.state.oculto ? "ver más" : "ver menos"}
        </a>
      </div>
    );
  }
}

export default CharacterCard;

 