import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, TouchableOpacity } from 'react-native';
import {
  Container, Card, CardMidia, CardContent, Name, Brand, Price,
} from './styles';

function ListProducts({ products, selectProduct }) {
  return (
    <Container>
      <FlatList
        keyExtractor={(item => item.id)}
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card>
            <TouchableOpacity onPress={() => selectProduct(item)}>
              <CardMidia source={{ uri: item.image }} />
              <CardContent>
                <Name>{item.name}</Name>
                <Brand>{item.brand}</Brand>
                <Price>{item.price}</Price>
              </CardContent>
            </TouchableOpacity>
          </Card>
        )}
      />
    </Container>
  );
}

ListProducts.defaultProps = {
  products: [],
};

ListProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ),
  selectProduct: PropTypes.func.isRequired,
};

export default ListProducts;
