import React, {createContext, useContext, useState, useEffect} from 'react';
import {Data, Footer, Lays, Prods, needs, pack} from './subfolder/Products';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a context for the cart
export const CartContext = createContext();

const allProducts = [...Data, ...Footer, ...Lays, ...Prods, ...needs, ...pack];
export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from AsyncStorage when the component mounts
  useEffect(() => {
    const loadCartFromStorage = async () => {
      try {
        const cartData = await AsyncStorage.getItem('cartItems');
        if (cartData) {
          setCartItems(JSON.parse(cartData));
        }
      } catch (error) {
        console.error('Error loading cart data:', error);
      }
    };

    loadCartFromStorage();
  }, []);

  // Function to update AsyncStorage with the latest cart items
  const updateAsyncStorage = async items => {
    try {
      await AsyncStorage.setItem('cartItems', JSON.stringify(items));
    } catch (error) {
      console.error('Error updating cart data:', error);
    }
  };

  const addToCart = productId => {
    const productToAdd = allProducts.find(product => product.id === productId);

    if (productToAdd) {
      const existingItem = cartItems.find(item => item.id === productId);
      if (existingItem) {
        setCartItems(prevCartItems =>
          prevCartItems.map(item =>
            item.id === productId
              ? {...item, quantity: item.quantity + 1}
              : item,
          ),
        );
      } else {
        setCartItems(prevCartItems => [
          ...prevCartItems,
          {...productToAdd, quantity: 1},
        ]);
      }
    }
  };

  const decreaseQuantity = productId => {
    setCartItems(prevCartItems =>
      prevCartItems
        .map(item =>
          item.id === productId
            ? {...item, quantity: Math.max(item.quantity - 1, 0)}
            : item,
        )
        .filter(item => item.quantity > 0),
    );
  };

  const increaseQuantity = productId => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === productId ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  // Whenever cartItems change, update AsyncStorage
  useEffect(() => {
    updateAsyncStorage(cartItems);
  }, [cartItems]);

  const totalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        totalAmount,
        increaseQuantity,

      }}>
      {children}
    </CartContext.Provider>
  );
};
   
export const useCart = () => {
  return useContext(CartContext);
};
