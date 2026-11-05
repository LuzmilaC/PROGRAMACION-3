import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class FormRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      error: ''
    };
  }

  controlarCambioUsername(event) {
    this.setState({ username: event.target.value });
  }

  controlarCambioEmail(event) {
    this.setState({ email: event.target.value });
  }

  controlarCambioPassword(event) {
    this.setState({ password: event.target.value });
  }

  submit(event) {
    event.preventDefault();

    const usuarioACrear = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      createdAt: Date.now()
    };

    if (this.state.username.length < 3 || this.state.username.length > 7) {
      this.setState({ error: 'La extensión del username debe ser de 3 a 7 caracteres' });
      return;
    }

    if (!this.state.email.includes('@')) {
      this.setState({ error: 'email mal formateado' });
      return;
    }

    if (this.state.password.length < 5 || this.state.password.length > 12) {
      this.setState({ error: 'La extensión del password debe ser de 5 a 12 caracteres' });
      return;
    }

    const usersStorage = localStorage.getItem('users');

    if (usersStorage !== null) {
      const usersParseado = JSON.parse(usersStorage);
      const usersFiltrado = usersParseado.filter(
        (user) => user.email === this.state.email
      );

      if (usersFiltrado.length > 0) {
        this.setState({ error: 'Ya existe un usuario con el email ingresado' });
        return;
      }

      usersParseado.push(usuarioACrear);
      const usersEnJson = JSON.stringify(usersParseado);
      localStorage.setItem('users', usersEnJson);
    } else {
      const usersInicial = [usuarioACrear];
      const usersEnJson = JSON.stringify(usersInicial);
      localStorage.setItem('users', usersEnJson);
    }

    this.props.history.push('/login');
  }

  render() {
    return (
      <form onSubmit={(event) => this.submit(event)}>
        <label>Username:</label>
        <input
          type="text"
          onChange={(event) => this.controlarCambioUsername(event)}
          value={this.state.username}
        />

        <label>Email:</label>
        <input
          type="text"
          onChange={(event) => this.controlarCambioEmail(event)}
          value={this.state.email}
        />

        <label>Password:</label>
        <input
          type="password"
          onChange={(event) => this.controlarCambioPassword(event)}
          value={this.state.password}
        />

        <input type="submit" value="Registrarse" />

        {this.state.error !== '' ? <p className="error">{this.state.error}</p> : ''}
      </form>
    );
  }
}

export default withRouter(FormRegister);