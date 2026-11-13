import { View, Text, StyleSheet } from 'react-native';

function Post(props) {  

  return (
    <View style={styles.container}>
      <Text>{props.post.data.email}</Text>
      <Text>{props.post.data.descripcionPost}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 6,
    padding: 10,
    marginVertical: 5,
  },
})

export default Post;