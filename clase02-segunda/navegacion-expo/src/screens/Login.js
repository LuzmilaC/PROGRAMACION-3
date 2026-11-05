import { useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import { auth } from '../firebase/config';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false); //estado del login que usa el .then
  const [loginError, setLoginError] = useState(''); // estado del login que usa el .then

  //funcion para logear al usuario
  function onSubmit(email, pass) {
    // validaciones antes de consultar a Firebase
    if (!email.includes('@')) {
      setLoginError('Email mal formateado');
      return;
    }
    if (pass.length < 6) {
      setLoginError('La password debe tener una longitud mínima de 6 caracteres');
      return;
    }

    auth.signInWithEmailAndPassword(email, pass)
    .then((response) => {
        setLogin(true);
        props.navigation.navigate('HomeMenu'); // redirige a Home si el login es correcto
    })
    .catch(error => {
        setLoginError('Credenciales incorrectas'); // texto que pide la consigna
    })
  }

  return (
    <View style={styles.container}>
      <Text>Ingresar</Text>
      <Text>Formulario de login</Text>

      <Pressable onPress={() => props.navigation.navigate('Register')}>
        <Text>Ir al registro</Text>
      </Pressable>

      <Pressable onPress={() => props.navigation.navigate('HomeMenu')}>
        <Text>Entrar en la app</Text>
      </Pressable>

      {/* formulario */}
      <TextInput style={styles.field}
        keyboardType='email-address'
        placeholder='email'
        onChangeText={ text => setEmail(text) }
        value={email} />

      <TextInput style={styles.field}
        keyboardType='default'
        placeholder='password'
        secureTextEntry={true}
        onChangeText={ text => setPassword(text) }
        value={password} />

      {/*onSubmit recibe los valores email y pass y Se los pasa a auth.createUserWithEmailAndPassword(email, pass), que registra al usuario en Firebase.*/}
      <Pressable onPress={() => onSubmit(email, password)} style={styles.boton}>
        <Text style={styles.textoBoton}> Login </Text>
      </Pressable>

      {/* muestra el error de login */}
      {loginError !== '' ? <Text>{loginError}</Text> : null}
    </View>
  )
};

//estilos 
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  field: {
    height: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 6,
    marginVertical: 10,
  },
  boton: {
    backgroundColor: '#28a745',
    paddingHorizontal: 10,
    paddingVertical: 6,
    textAlign: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#28a745',
  },
  textoBoton: {
    color: '#fff',
  },
});

export default Login;