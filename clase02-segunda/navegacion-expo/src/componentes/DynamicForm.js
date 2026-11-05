import { useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';

function DynamicForm(props) {
  const [comentario, setComentario] = useState('');

  function onSubmit() {
    console.log('Comentario: ' + comentario);
  }

  return (
    <View style={styles.container}>
      <Text>Comentarios</Text>

      {/* formulario */}
      <TextInput style={styles.field}
        keyboardType='default'
        placeholder='comentar'
        onChangeText={ text => setComentario(text) }
        value={comentario} />

      <Pressable onPress={() => onSubmit()} style={styles.boton}>
        <Text style={styles.textoBoton}> enviar </Text>
      </Pressable>

      {/* control en tiempo real */}
      <View>
        <Text>Comentario: {comentario}</Text>
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

export default DynamicForm;