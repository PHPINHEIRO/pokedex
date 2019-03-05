import React, { Component } from 'react'
import {StyleSheet, View } from 'react-native'
import { Header } from 'react-native-elements';


export default class MyHeader extends Component {
  render() {
    return (
      <View>
        <Header 
            containerStyle={{
                backgroundColor: '#EF5350',
            }}
            centerComponent={{ text: 'Pokemons', style:styles.title}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title:{
    color: '#FFF', 
    fontSize: 20,
    fontWeight: 'bold',
  }
})
