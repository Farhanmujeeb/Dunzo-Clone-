import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

type HomeProps = {
  navigation: NavigationProp<any>;
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (text: string) => {
    const numericOnly = text.replace(/[^0-9]/g, '');
    setPhoneNumber(numericOnly);
  };

  const handleEnterPress = () => {
    if (phoneNumber.length === 10) {
      navigation.navigate('Daily');
    } else {
      Alert.alert('Please enter a valid phone number.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./aseets/dunzodaily.webp')}
      />
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="+91 Enter Your Number"
          placeholderTextColor="black"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleEnterPress}>
          <Text style={styles.buttonText}>ENTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 350,
  },
  inputs: {
    flexDirection: 'row',
    marginTop: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'black',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#128C7E',
    padding: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default Home;
