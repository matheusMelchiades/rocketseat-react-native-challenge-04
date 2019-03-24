import React from 'react'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Products from './Products';
import Details from './Details';
import Cart from './Cart';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Home = createStackNavigator({
  Products: {
    screen: Products,
  },
  Details: {
    screen: Details
  },

})

const Navigation = createBottomTabNavigator({
  Home: {
    screen: Home,
    tabBarOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={24} />
      )
    })
  },
  Cart: Cart
})

export default createAppContainer(Navigation)
