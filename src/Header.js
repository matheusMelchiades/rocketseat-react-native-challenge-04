import React, { Component } from 'react'
import { View, Text, Platform, StyleSheet } from 'react-native'
import style from './style';

export class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: Platform.OS == 'android' ? '31%' : 0
  },
  title: {
    color: style.primary.main,
    fontSize: 25,
    fontWeight: 'bold'
  }
})

export default Header
