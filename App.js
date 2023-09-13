import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {

  const [pokes, setPokes] = useState([]);

  const getListPoke = () => {
    const fetching = fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
       .then((pokemonData) => {
        const temporaryPokemon = [];

        Promise.all(pokemonData.results.map((pokemon) => {          
          return fetch(pokemon.url)
          .then((response) => response.json())
          .then((pokemonData) => {
            return temporaryPokemon.push(pokemonData);
          })

        })).then(() => {
          temporaryPokemon.sort((poke1,poke2) => poke1.id - poke2.id);
          setPokes(temporaryPokemon)
        })
      })
  }

  useEffect(() => {
    getListPoke()
  }, []);

  return (
    <View style={styles.container}>
      {pokes.length > 0 ? pokes.map((poke) => {
        return (
        <>
         <Text key={poke.name}>{poke.name}</Text>
         <Image source={{uri: poke.sprites.front_default}} style={{width: 50, height: 50}} />
         <Text>Height : {poke.height}</Text>
         <Text>Weight : {poke.weight}</Text>
        </>
        )
      }) : <Text>Loading...</Text>}
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
