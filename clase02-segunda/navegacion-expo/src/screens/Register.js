import { useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import { auth, db } from '../firebase/config';

function Register(props) {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);
  const [registerError, setRegisterError] = useState('');

  //funcion para registrar al usuario
  function onSubmit(email, pass, userName) {
    auth.createUserWithEmailAndPassword(email, pass)

    .then( response => {
        db.collection('users').add({
            email: auth.currentUser.email,
            userName: userName,
            createdAt: Date.now(),
        })
        .then( () => {
            setRegister(true);
            props.navigation.navigate('Login'); //redirige a Login si se registró bien
        })
        .catch( e => console.log(e))
     })
    .catch( error => {
        setRegisterError('Fallo en el registro.')
    })
  }

  // ... el return queda igual, salvo el onPress del botón:
  // <Pressable onPress={() => onSubmit(email, password, userName)} style={styles.boton}>
}