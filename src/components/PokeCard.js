import React, { Component } from 'react'
import { StyleSheet, View, } from 'react-native'
import { Card, Avatar } from 'react-native-elements';
import axios from 'axios';


export default class PokeCard extends Component {

    state={
        data:[]
    }

    async componentDidMount(){
        const response = await axios.get(this.props.url)
        const results = await response.data
        this.setState({data:results})
        console.log(this.state.data)
    }

    render() {
        return (
            <View>
                <Card title={this.props.name}
                    containerStyle={styles.card}
                    titleStyle={{ fontSize: 10 }}
                >
                    <View style={{ alignItems: 'center' }}>
                        <Avatar
                            rounded
                            size='medium'
                            overlayContainerStyle={{ backgroundColor: '#A5D6A7' }}
                            source={{
                                uri:
                                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                            }}
                        />
                    </View>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: 90,
        height: 120,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#66BB6A'
    }
})
