import { useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import { auth } from '../firebase/config';

function Register(props) {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false); //estado del registro que usa el .then
  const [registerError, setRegisterError] = useState(''); // estado del registro que usa el .catch

  //funcion para registrar al usuario
  function onSubmit(email, pass) {
    auth.createUserWithEmailAndPassword(email, pass)

    .then( response => {
        setRegister(true);
        props.navigation.navigate('Login'); //redirige a Login si se registró bien
     })
    .catch( error => {
        setRegisterError('Fallo en el registro.')
    })
  }


  return (
    <View style={styles.container}>
      <Text>Registro</Text>
      <Pressable onPress={() => props.navigation.navigate('Login')}>
        <Text>Ya tengo cuenta</Text>
      </Pressable>

      {/* formulario */}
      <TextInput style={styles.field}
        keyboardType='email-address'
        placeholder='email'
        onChangeText={ text => setEmail(text) }
        value={email} />

      <TextInput style={styles.field}
        keyboardType='default'
        placeholder='userName'
        onChangeText={ text => setUserName(text) }
        value={userName} />

      <TextInput style={styles.field}
        keyboardType='default'
        placeholder='password'
        secureTextEntry={true}
        onChangeText={ text => setPassword(text) }
        value={password} />

      {/*onSubmit recibe los valores email y pass y Se los pasa a auth.createUserWithEmailAndPassword(email, pass), que registra al usuario en Firebase.*/}
      <Pressable onPress={() => onSubmit(email, password)} style={styles.boton}>
        <Text style={styles.textoBoton}> registrarme </Text>
      </Pressable>

      {/* muestra el error de registro (ternario, como en clase) */}
      {registerError !== '' ? <Text>{registerError}</Text> : null}

      {/* control en tiempo real */}
      <View>
        <Text>Email: {email}</Text>
        <Text>UserName: {userName}</Text>
        <Text>Password: {password}</Text>
      </View>
    </View>
  );
}

//estilos (sin cambios)
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

export default Register;