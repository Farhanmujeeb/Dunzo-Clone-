import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const Stores = () => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            marginLeft: 15,
            fontWeight: 'bold',
          }}>
          Essentials delivered to your doorstep
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            elevation: 3,
            height: 358,
            marginTop: 10,
          }}>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <TouchableOpacity>
              <Image
                style={{width: 120, height: 160}}
                source={require('../Images/courier.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{width: 120, height: 160}}
                source={require('../Images/veggies.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{width: 120, height: 160}}
                source={require('../Images/fishes.jpg')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <TouchableOpacity>
              <Image
                style={{width: 120, height: 160}}
                source={require('../Images/essies.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{width: 120, height: 160}}
                source={require('../Images/pets.jpg')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{width: 120, height: 160}}
                source={require('../Images/meds.jpg')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 25,
            height: 80,
          }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                height: 70,
                width: 80,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
              }}>
              <Image source={require('../aseets/giftbox.png')} />
              <Text style={{color: 'black', fontWeight: 'bold'}}>Gifts</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                height: 70,
                width: 80,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
              }}>
              <Image source={require('../aseets/paan.png')} />
              <Text style={{color: 'black', fontWeight: 'bold'}}>Paan</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                height: 70,
                width: 80,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
              }}>
              <Image source={require('../aseets/medical.png')} />
              <Text style={{color: 'black', fontWeight: 'bold'}}>Wellness</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                height: 70,
                width: 80,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
              }}>
              <Image source={require('../aseets/shop.png')} />
              <Text style={{color: 'black', fontWeight: 'bold'}}>Store</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Stores;

const styles = StyleSheet.create({});
