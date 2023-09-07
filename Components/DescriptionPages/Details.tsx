import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {Data, Footer, Lays, Prods, pack} from '../subfolder/Products';
import {useCart} from '../ShopContext';
import {
  RouteProp,
  useRoute,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Daily: undefined;
  Login: undefined;
  View: undefined;
  Details: {itemId: number};
};

const Details = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Details'>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const {itemId} = route.params;
  const selectAll = [...Data, ...Lays, ...Prods, ...pack, ...Footer];
  const {addToCart, cartItems} = useCart();
  const selectedItem = selectAll.find(item => item.id === itemId);

  if (!selectedItem) {
    return (
      <View>
        <Text style={styles.errorText}>Item not found</Text>
      </View>
    );
  }

  const getRelatedProducts = (selectedItem: any, selectAll: any[]) => {
    const relatedProducts = selectAll.filter(
      item => item.cat === selectedItem.cat && item.id !== selectedItem.id,
    );
    return relatedProducts;
  };
  const relatedProducts = getRelatedProducts(selectedItem, selectAll);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.closeButton}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <Image source={selectedItem.Image} style={styles.itemImage} />
          <Text style={styles.itemTitle}>{selectedItem.title}</Text>
          <Text style={styles.itemDescription}>{selectedItem.des}</Text>
          <Text style={styles.itemPrice}>Price: ${selectedItem.price}</Text>
          <TouchableOpacity
            onPress={() => {
              addToCart(selectedItem.id);
            }}
            style={styles.addButton}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.relatedProductsContainer}>
          <Text style={styles.relatedProductsTitle}>Related Products</Text>
          <FlatList
            data={relatedProducts}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Details', {itemId: item.id});
                }}
                style={styles.relatedProductItem}>
                <Image source={item.Image} style={styles.relatedProductImage} />
                <Text style={styles.relatedProductTitle}>{item.title}</Text>
                <Text style={styles.relatedProductPrice}>
                  Price: ${item.price}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  closeButton: {
    fontSize: 30,
    color: 'red',
  },
  itemContainer: {
    alignItems: 'center',
  },
  itemImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemDescription: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  itemPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'green',
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  relatedProductsContainer: {
    marginTop: 20,
  },
  relatedProductsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  relatedProductItem: {
    marginRight: 20,
  },
  relatedProductImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  relatedProductTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  relatedProductPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default Details;
