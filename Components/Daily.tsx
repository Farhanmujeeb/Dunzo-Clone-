import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dailyes from './subfolder/Dailyes';
import Stores from './subfolder/Stores';
import Orders from './subfolder/Orders';
import Courier from './subfolder/Courier';
const Tab = createBottomTabNavigator();

const Daily = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dailyes"
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#128C7E'}}>
      <Tab.Screen
        name="Dailyes"
        component={Dailyes}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('./aseets/morning.png')}
                style={{tintColor: focused ? '#128C7E' : 'black'}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Stores"
        component={Stores}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('./aseets/store.png')}
                style={{tintColor: focused ? '#128C7E' : 'black'}}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Courier"
        component={Courier as React.FC}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('./aseets/bike.png')}
                style={{tintColor: focused ? '#128C7E' : 'black'}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Order"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('./aseets/checkout.png')}
                style={{tintColor: focused ? '#128C7E' : 'black'}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default Daily;
const styles = StyleSheet.create({});
