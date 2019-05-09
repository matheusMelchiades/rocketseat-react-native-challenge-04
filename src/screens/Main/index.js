import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleApp from '../../config/style';
import API from '../../services/api';
import {
  Container,
} from './styles';
import Categories from '../../components/Categories';
import Products from '../../components/Products';

export default class Main extends Component {
  static navigationOptions = {
    headerTitle: 'GoCommerce',
    headerTitleStyle: styleApp.header,
  }

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
    };
  }

  componentDidMount() {
    this.getCategories();
    this.getProducts();
  }

  getCategories = async () => {
    try {
      const response = await API.get('/categories');

      if (response.status !== 200) return;

      this.setState(prevState => ({
        ...prevState,
        categories: response.data,
      }));
    } catch (err) {
      console.log(err);
    }
  }

  getProducts = async () => {
    try {
      const { categoryCurrent } = this.state;
      const handlePath = !categoryCurrent ? '/products' : `/category_products/${categoryCurrent || ''}`;
      const response = await API.get(handlePath);

      if (response.status !== 200) return;

      if (categoryCurrent > 0) {
        this.setState(prevState => ({ ...prevState, products: response.data.products }));
      } else {
        this.setState(prevState => ({ ...prevState, products: response.data }));
      }
    } catch (err) {
      console.log(err);
    }
  }

  changeCategory = (id) => {
    this.setState(prevState => ({
      ...prevState,
      categoryCurrent: id,
    }), this.getProducts);
  };

  onSelectProduct = (product) => {
    const { navigation } = this.props;
    navigation.navigate('Details', { product });
  }

  render() {
    const { categories, products } = this.state;

    return (
      <Container>
        <Categories
          categories={categories}
          changeCategory={this.changeCategory}
        />
        <Products
          products={products}
          selectProduct={this.onSelectProduct}
        />
      </Container>
    );
  }
}
