import { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { db } from '../firebase/config';

function Usuarios(props) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    db.collection('users').onSnapshot(
      docs => {
        let usersDocs = [];
        docs.forEach( doc => {
          usersDocs.push({
            id: doc.id,
            data: doc.data()
          })
        })
        setUsers(usersDocs);
        setLoading(false);
      }
    )
  }, [])

  console.log(users);

  return (
    <View style={styles.container}>
      <Text>Lista de usuarios</Text>
      {loading ?
        <ActivityIndicator size='large' color='green' /> :
        <FlatList
          data={users}
          keyExtractor={ item => item.id.toString() }
          renderItem={ ({item}) => <Text>{item.data.email}</Text> }
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },
})

export default Usuarios;