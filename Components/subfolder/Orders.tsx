import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useCart} from '../ShopContext';
import {ScrollView} from 'react-native-gesture-handler';

///////////////////// Define a Product type ////////////////////////
type Product = {
  id: number;
  title: string;
  kg: string;
  price: number;
  Image: any;
  quantity: any;
};

const Orders = () => {
  const {cartItems, totalAmount, decreaseQuantity, increaseQuantity} =
    useCart();

  return (
    <ScrollView>
      <View style={styles.container}>
        {cartItems.length === 0 ? (
          <View style={styles.emptyCartContainer}>
            <Image
              source={require('../aseets/money.png')}
              style={styles.emptyCartImage}
            />
            <Text style={styles.emptyCart}>Cart is empty</Text>
          </View>
        ) : (
          <>
            {cartItems.map((item: Product) => (
              <View key={item.id} style={styles.card}>
                <Image source={item.Image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.kg}> {item.kg}</Text>
                <Text style={styles.price}>
                  Price: ${item.price * item.quantity}
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => decreaseQuantity(item.id)}>
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.quantityButton}
                    onPress={() => increaseQuantity(item.id)}>
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
            {/* Display total amount */}
            <Text style={styles.totalAmount}>
              Total Amount: ${totalAmount()}
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Pay ${totalAmount()}</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    color: 'black',
  },
  kg: {
    fontSize: 16,
    marginHorizontal: 10,
    color: 'black',
  },
  price: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
  },

  quantityButton: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    borderRadius: 4,
    marginRight: 10,
  },

  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },

  button: {
    backgroundColor: '#FF5733',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emptyCart: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'black',
  },
  emptyCartContainer: {flexDirection: 'row'},
  emptyCartImage: {width: 20, height: 20},
});

export default Orders;
