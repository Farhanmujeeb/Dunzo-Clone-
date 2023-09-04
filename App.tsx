import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from './Components/Home';
import Daily from './Components/Daily';
import Login from './Components/subfolder/Login';
import {CartContext, CartProvider} from './Components/ShopContext';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Daily" component={Daily} />
          <Stack.Screen name="Login">
            {({navigation}) => (
              <Login isVisible={true} onClose={() => navigation.goBack()} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
const styles = StyleSheet.create({});
