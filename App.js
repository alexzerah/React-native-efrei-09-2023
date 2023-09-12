import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';



export default function App() {
  
  const [poke, setPoke] = useState();


  const getPoke = () => {
    const fetching = fetch('https://pokeapi.co/api/v2/pokemon/429')
      .then((response) => response.json())
       .then((json) => setPoke(<Text key={json.id}>{json.name}</Text>))
  }
  getPoke();

  return (
    <View style={styles.container}>
      {poke? poke : null}
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
