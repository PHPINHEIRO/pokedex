import React from 'react'
import { 
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator 
} from 'react-navigation'

import Pokemons from '../screens/Pokemons'
import Pokedetails from '../screens/Pokedetails'


const tabNavigator = createBottomTabNavigator({
    Pokemons:{
        screen: Pokemons,
        navigationOptions:{
        }

    },
    Detalhes:{
        screen: Pokedetails,
        navigationOptions:{
        }
    },

},{
    navigationOptions:
        ({navigation}) => {
            const { routeName} = navigation.state.routes[navigation.state.index]
            return{
                headerTitle: routeName
            }
        },
        tabBarOptions:{
            activeTintColor: '#FFE850',
            inactiveTintColor:'gray',
            style: {
                backgroundColor: '#424242',
            },
            showLabel:true
        },
})



const StackNavigator = createStackNavigator({
    pokemons:{screen:tabNavigator},
},{
    defaultNavigationOptions: {
        headerTintColor: '#FFC91A',
        headerStyle: {backgroundColor: '#EF5350'},
      },
      navigationOptions: {
        tabBarLabel: 'Home!',
      },
})




export default createAppContainer(StackNavigator)


