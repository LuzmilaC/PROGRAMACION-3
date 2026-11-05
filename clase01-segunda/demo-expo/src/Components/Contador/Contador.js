import { useState, useEffect, useRef, useContext } from "react";
import { View, Text, Pressable } from 'react-native';
 import { StyleSheet } from 'react-native';

function ContadorDeClicks(props){

   const [cantClicks, setCantClicks] = useState(0);
   
  const styles = StyleSheet.create({
   container: {
    backgroundColor: 'rgba(0, 255, 42, 0.5)',
     textAlign: 'center',
    fontSize: 16,
    padding: 10
  },
}) 

   return (
    <View style={styles.container}>
           <Text>La cantidad de clicks es: {cantClicks} </Text>
            <Pressable onPress={() => setCantClicks(cantClicks+1)}> 
       <Text>Click aquí para contar</Text> 
      </Pressable> 
       </View>

   )

}

export default ContadorDeClicks;
