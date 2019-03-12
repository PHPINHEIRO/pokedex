import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Pokemon from '../components/Pokemon';
import Axios from 'axios'

export default class Pokemons extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Pokemon></Pokemon>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    
  }
})
