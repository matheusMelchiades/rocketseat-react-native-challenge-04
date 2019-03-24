import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import style from './style'
import Header from './Header'

const categories = [
  {
    id: 1,
    title: "Camisetas"
  },
  {
    id: 2,
    title: "Camisas"
  },
  {
    id: 3,
    title: "Calças"
  },
  {
    id: 4,
    title: "Blusas"
  },
  {
    id: 5,
    title: "Bonés"
  },
  {
    id: 6,
    title: "Casacos"
  }
]
const products = [
  {
    id: 1,
    name: "Camiseta Hyperas Preta",
    brand: "Quiksilver",
    image: "https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg",
    price: 49.99
  },
  {
    id: 2,
    name: "Camiseta Double Tap Preta",
    brand: "Quiksilver",
    image: "https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg",
    price: 59.99
  },
  {
    id: 3,
    name: "Camiseta Logo Azul",
    brand: "Red Bull",
    image: "https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg",
    price: 54.99
  },
  {
    id: 4,
    name: "Camiseta Primo Tipper",
    brand: "Rip Curl",
    image: "https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg",
    price: 39.99
  }
]

export class Products extends Component {

  static navigationOptions = {
    headerTitle: <Header title="GoCommerce" />,
  }

  renderCategories = () => {
    return categories.map((cat) => (
      <TouchableOpacity key={cat.id} style={styles.catButton}>
        <Text style={styles.catTitle}>
          {cat.title}
        </Text>
      </TouchableOpacity>
    ))
  }

  renderProducts = ({ item }) => {
    return (
      <View style={styles.containerCard}>
        <TouchableOpacity>
          <Image style={styles.imageCard} source={{ uri: item.image }} />
          <View style={styles.detailsCard}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subTitleCard}>{item.brand}</Text>
            <Text style={styles.priceCard}>{item.price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.catContainer}>
          <ScrollView horizontal>
            {this.renderCategories()}
          </ScrollView>
        </View>
        <View style={styles.content}>
          <FlatList
            keyExtractor={(item => item.id)}
            data={products}
            numColumns={2}
            renderItem={this.renderProducts} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  catContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  catButton: {
    height: 60,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: style.primary.light,
  },
  catTitle: {
    color: style.primary.text,
    fontSize: 16,
    fontWeight: 'bold'
  },
  content: {
    padding: 10,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.05)'
  },
  containerCard: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: '48%',
    padding: 5,
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: 'rgba(0,0,0,0.03)',
    backgroundColor: 'white'
  },
  imageCard: {
    width: '80%',
    height: 200
  },
  detailsCard: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  titleCard: {
    color: style.text.dark
  },
  subTitleCard: {
    color: style.secondary.textLight
  },
  priceCard: {
    color: style.secondary.dark
  },
})

export default Products
