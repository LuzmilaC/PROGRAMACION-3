import { View, Text, StyleSheet } from 'react-native';
import DynamicForm from '../componentes/DynamicForm';


function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <DynamicForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,0,0,0.5)',
    alignItems: 'center',
    fontSize: 16,
  },
});

export default Home;