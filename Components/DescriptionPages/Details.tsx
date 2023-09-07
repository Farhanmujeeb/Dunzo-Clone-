import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {Data, Footer, Lays, Prods, needs, pack} from '../subfolder/Products';
import {useCart} from '../ShopContext';
const Details = ({route, navigation}) => {
  const {itemId} = route.params;
  const selectAll = [...Data, ...Lays, ...Prods, ...pack, ...Footer];
  const {addToCart} = useCart();
  const selectedItem = selectAll.find(item => item.id === itemId);
  if (!selectedItem) {
    return (
      <View>
        <Text>Item not found</Text>
      </View>
    );
  }

  const getRelatedProducts = (selectedItem, selectAll) => {
    const relatedProducts = selectAll.filter(
      item => item.cat === selectedItem.cat && item.id !== selectedItem.id,
    );
    return relatedProducts;
  };
  const relatedProducts = getRelatedProducts(selectedItem, selectAll);

  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>x</Text>
        </TouchableOpacity>
      </View>

      <Image source={selectedItem.Image} />
      <Text>{selectedItem.title}</Text>
      <Text>{selectedItem.kg}</Text>
      <Text>{selectedItem.price}</Text>
      <TouchableOpacity onPress={addToCart()}>
        <Text>Add</Text>
      </TouchableOpacity>
      <View>
        <FlatList
          data={relatedProducts}
          horizontal
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.push('Details', {itemId: item.id});
              }}>
              <Image source={item.Image} />
              <Text>{item.title}</Text>
              <Text>{item.kg}</Text>
              <Text>{item.price}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
