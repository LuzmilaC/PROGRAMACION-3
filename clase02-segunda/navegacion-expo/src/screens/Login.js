import { useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit() {
    console.log('Email: ' + email);
    console.log('Password: ' + password);
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

      <Pressable onPress={() => onSubmit()} style={styles.boton}>
        <Text style={styles.textoBoton}> Login </Text>
      </Pressable>

      {/* control en tiempo real */}
      <View>
        <Text>Email: {email}</Text>
        <Text>Password: {password}</Text>
      </View>
    </View>
  );
}

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