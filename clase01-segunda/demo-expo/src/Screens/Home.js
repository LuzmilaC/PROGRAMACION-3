import React from "react";
 import { View, Text } from 'react-native';
import Contador from "../Components/Contador"
 import { StyleSheet } from 'react-native';

 function Home() {
    function clickear() {
    console.log("me clickearon");
  }
  return (
<View>
    <Text> Hello World </Text> 

 <Pressable onPress={() => clickeame()}> 
       <Text> clickeame </Text> 
</Pressable> 

 	<Contador />

</View> 
);
}

export default Home;

