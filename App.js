import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MyHeader from './src/components/Header';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyHeader></MyHeader>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebee'
  },
});
