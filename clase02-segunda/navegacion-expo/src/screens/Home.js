import { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DynamicForm from '../componentes/DynamicForm';
import Post from '../componentes/Post';
import { db } from '../firebase/config';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect( () => {
    db.collection('posts').onSnapshot(
      docs => {
        let postsDocs = [];
        docs.forEach( doc => {
          postsDocs.push({
            id: doc.id,
            data: doc.data()
          })
        })
        setPosts(postsDocs);
      }
    )
  }, [])

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <DynamicForm />
      <FlatList
        data={posts}
        keyExtractor={ item => item.id.toString() }
        renderItem={ ({item}) => <Post post={item} /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;