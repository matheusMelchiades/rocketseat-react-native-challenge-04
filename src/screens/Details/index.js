import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleApp from '../../config/style';
import {
  Container, Card, CardMidia,
  CardContent, Name, Brand, Price, ButtonAddCart, TitleButton,
} from './styles';


export default class Details extends Component {
  static navigationOptions = {
    headerTitle: 'Detalhe do produto',
    headerTitleStyle: { ...styleApp.header, flex: 0 },
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
      <Container>
        <Card>
          <CardMidia source={{ uri: product.image }} />
          <CardContent>
            <Name>{product.name}</Name>
            <Brand>{product.brand}</Brand>
            <Price>{product.price}</Price>

            <ButtonAddCart>
              <TitleButton>Adicionar ao carrinho</TitleButton>
            </ButtonAddCart>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
