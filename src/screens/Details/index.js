import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Header from '../../components/Header';

export default class Details extends Component {
  static navigationOptions = {
    headerTitle: <Header title="Detalhe do produto" />,
  }

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      product: props.navigation.getParam('product'),
    };
  }

  render() {
    const { product } = this.state;
    return (
      <View>
        <Text>
          DETAILS

          {
            JSON.stringify(product, null, 4)
          }
        </Text>
      </View>
    );
  }
}
