import { useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import { db, auth } from '../firebase/config';

function NuevoPost(props) {
  const [descripcion, setDescripcion] = useState('');

  //funcion para guardar el post en la colección posts
  function onSubmit(descripcion) {
    db.collection('posts').add({
      email: auth.currentUser.email,
      descripcionPost: descripcion,
      createdAt: Date.now(),
    })
    .then( () => setDescripcion('') )
    .catch( e => console.log(e))
  };

  //funcion para agregar datos la coleccion posts
//....



  return (
    <View style={styles.container}>
      <Text>Nuevo post</Text>

      {/* formulario */}
      <TextInput style={styles.field}
        keyboardType='default'
        placeholder='Escribí tu post'
        onChangeText={ text => setDescripcion(text) }
        value={descripcion} />

      <Pressable onPress={() => onSubmit(descripcion)} style={styles.boton}>
        <Text style={styles.textoBoton}> Publicar </Text>
      </Pressable>
    </View>
  )
}

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
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#28a745',
  },
  textoBoton: {
    color: '#fff',
  },
})

export default NuevoPost;