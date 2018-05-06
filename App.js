import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, FlatList, TouchableOpacity, Alert } from 'react-native'

export default class App extends React.Component {
  state = {
    products: [
      { id: 1, uri: './comida.jpg', value: 20.00, name: 'Prato Vegetariano 1', sale: 0 },
      { id: 2, uri: './comida.jpg', value: 25.00, name: 'Prato Vegetariano 2', sale: 0 },
      { id: 3, uri: './comida.jpg', value: 30.00, name: 'Prato Vegetariano 3', sale: 0 },
      { id: 4, uri: './comida.jpg', value: 15.00, name: 'Prato Vegetariano 4', sale: 0 },
      { id: 5, uri: './comida.jpg', value: 12.00, name: 'Prato Vegetariano 5', sale: 0 },
      { id: 6, uri: './comida.jpg', value: 11.00, name: 'Prato Vegetariano 6', sale: 0 },
      { id: 7, uri: './comida.jpg', value: 19.00, name: 'Prato Vegetariano 7', sale: 0 },
      { id: 8, uri: './comida.jpg', value: 22.00, name: 'Prato Vegetariano 8', sale: 0 }
    ],
    productsBuy: [],
    total: 0.00
  }

  addProduct(product) {
    let products = this.state.products
    let productsBuy = this.state.productsBuy

    products.map((item) => {
      if (item.id == product.id)
        item.sale++
    })

    productsBuy.push(product)
    this.setState((prev) => ({
      productsBuy: productsBuy,
      products: products,
      total: prev.total + product.value
    }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.user}>
            <Text style={styles.userText}>R</Text>
          </View>
          <ScrollView horizontal={true}> 
            <View style={styles.containerCategory}>
              <View style={styles.category}><Text style={styles.categoryText}>LANCHES</Text></View>
              <View style={styles.category}><Text style={styles.categoryText}>PETISCOS</Text></View>
              <View style={styles.category}><Text style={styles.categoryText}>BEBIDAS</Text></View>
              <View style={styles.category}><Text style={styles.categoryText}>ENTRADAS</Text></View>
              <View style={styles.category}><Text style={styles.categoryText}>SOBREMESA</Text></View>
              <View style={styles.category}><Text style={styles.categoryText}>PRATO PRINCIPAL</Text></View>
            </View>
          </ScrollView>
        </View>
        <Text style={styles.titleCategory}>Prato Principal</Text>
        <ScrollView contentContainerStyle={styles.listProduct}>
          <FlatList
            data={this.state.products}
            extraData={this.state}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => this.addProduct(item)}>
                  <View key={item.id} style={styles.product} >
                    <Image style={styles.image} source={require('./comida.jpg')} />
                    {(item.sale > 0)
                      ? <View style={styles.itensBuy}>
                        <Text style={styles.itensBuyText}>{item.sale}</Text>
                      </View>
                      : null
                    }
                    <View style={styles.productName}>
                      <Text>{item.name}</Text>
                      <Text>R$ {item.value}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            }}
          />
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Garçom: Vinicius</Text>
          <View>
            <Text style={styles.footerText}>Itens: {this.state.productsBuy.length}</Text>
            <Text style={styles.footerText}>R$ {this.state.total}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },

  header: {
    height: 100,
    paddingTop: 30,
    backgroundColor: '#FFF',
    width: 100 + '%',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },

  footer: {
    position: 'absolute',
    height: 75,
    width: 100 + '%',
    backgroundColor: '#6550B7',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },

  footerText: {
    color: '#FFF',
    fontWeight: 'bold'
  },

  listProduct: {
    paddingTop: 10,
    paddingBottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  product: {
    backgroundColor: '#FFF',
    flexGrow: 1,
    margin: 2,
    padding: 10,
    alignItems: 'center'
  },

  productName: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    width: 150,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },

  itensBuy: {
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E25F5F',
    width: 20,
    borderRadius: 10
  },

  itensBuyText: {
    color: '#FFF'
  },

  image: {
    position: 'relative',
    top: 0,
    left: 0,
    height: 150,
    width: 150,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },

  titleCategory: {
    paddingBottom: 5,
    fontSize: 20,
    margin: 4
  },

  user: {
    backgroundColor: '#6550B7',
    height: 50,
    width: 50,
    borderRadius: 25,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },

  userText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },

  // category: {
  //   borderColor: '#6550B7',
  //   borderRadius: 50,
  //   backgroundColor: '#6550B7',
  //   height: 20
  // },

  // cateogoryContainer: {
  //   marginTop: 10,
  //   height: 40,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   alignItems: 'center'
  // },

  containerCategory: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center' 
  },

  category: {
    height: 30,
    backgroundColor: '#6550B7',
    borderRadius: 20,
    borderColor: '#6550b7',
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },

  categoryText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#FFF',
    margin: 10
  },
})