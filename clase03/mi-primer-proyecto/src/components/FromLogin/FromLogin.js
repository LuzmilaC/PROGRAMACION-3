import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  controlarCambioEmail(event) {
    this.setState({ email: event.target.value });
  }

  controlarCambioPassword(event) {
    this.setState({ password: event.target.value });
  }

  submit(event) {
    event.preventDefault();

    const usersStorage = localStorage.getItem('users');

    if (usersStorage === null) {
      this.setState({ error: 'las credenciales ingresadas son inválidas' });
      return;
    }

    const usersParseado = JSON.parse(usersStorage);
    const usersFiltrado = usersParseado.filter(
      (user) => user.email === this.state.email
    );

    if (usersFiltrado.length === 0) {
      this.setState({ error: 'El usuario ingresado no existe' });
      return;
    }

    if (usersFiltrado[0].password !== this.state.password) {
      this.setState({ error: 'las credenciales ingresadas son inválidas' });
      return;
    }

    sessionStorage.setItem('usuarioEnSesion', JSON.stringify({ sesionActiva: true }));
    cookies.set('auth-user', usersFiltrado[0].email);

    this.props.history.push('/');
  }

  render() {
    return (
      <form onSubmit={(event) => this.submit(event)}>
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

        <input type="submit" value="Ingresar" />

        {this.state.error !== '' ? <p className="error">{this.state.error}</p> : ''}
      </form>
    );
  }
}

export default withRouter(FormLogin);