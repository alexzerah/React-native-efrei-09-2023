import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {
  
  const [poke, setPoke] = useState(null);

  const getPoke = () => {
    const fetching = fetch('https://pokeapi.co/api/v2/pokemon/429')
      .then((response) => response.json())
       .then((pokemonData) => setPoke(pokemonData))
  }

  useEffect(() => {
    getPoke();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{uri: poke?.sprites.front_default}} style={{width: 150, height: 150}}></Image> : <Text>Chargement</Text>
      
      {poke? <Text>{poke.name}</Text> : null}
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
