import React, { Component } from 'react'
import { StyleSheet, View, } from 'react-native'
import { Card, Avatar } from 'react-native-elements';



export default class PokeCard extends Component {

    state = {
        data: [],
        pokeIndex: '',
        spriteUrl: '1',
    }

    async componentDidMount() {
        const pokeID = await this.props.url.split('/')[this.props.url.split('/').length - 2]
        const spriteUrl = await `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`
        this.setState({
            pokeIndex: pokeID,
            spriteUrl: spriteUrl
        })
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
                            source={{ uri: this.state.spriteUrl }}
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