import React, { Component } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios'
import PokeCard from './PokeCard';


export default class Pokemon extends Component {
  state = {
    data: [],
    offset: 0,
    loading: false,
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    if (this.state.loading) return;

    const { offset } = this.state;

    this.setState({ loading: true });

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
      const pokemons = await response.data;
      if(pokemons.results){
        this.setState({
          data: [ ...this.state.data, ...pokemons.results ],
          offset: offset + 20,
          loading: false,
      });
      }else(
        alert('Sem mais informacoes')
      )
    } catch {
      alert('Problema na requisicao')
    }  
  }

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  };

  renderItem = ({ item }) => (
   <PokeCard name={item.name} url={item.url}></PokeCard>
  );

  render() {
    return (
      <FlatList
        horizontal={false}
        numColumns={3}
        style={{ marginTop: 10 }}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.name}
        onEndReached={this.loadRepositories}
        onEndReachedThreshold={0.1}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-around'
  },
  loading: {
    alignSelf: 'center',
    marginVertical: 10,
  },
});