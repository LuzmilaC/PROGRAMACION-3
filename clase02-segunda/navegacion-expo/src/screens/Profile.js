import { View, Text, Pressable, StyleSheet } from 'react-native';

function Profile(props) {
  return (
    <View style={styles.container}>
      <Text>Mi Perfil</Text>
      <Pressable style={styles.button} onPress={() => props.navigation.navigate('Login')}>
        <Text>Desloguearse</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: '#f2f2f2' },
  button: { padding: 7, backgroundColor: 'orange', borderRadius: 4 }
});

export default Profile;