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

  const isButtonDisabled = phoneNumber.length !== 10;

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./aseets/dunzodaily.webp')} />
      <Text style={styles.title}>Welcome to GrocHub</Text>
      <Text style={styles.subtitle}>Your Delivery Partner</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
        />
        <TouchableOpacity
          style={[styles.button, isButtonDisabled && styles.disabledButton]}
          onPress={handleEnterPress}
          disabled={isButtonDisabled}>
          <Text style={styles.buttonText}>Get Started</Text>
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
    backgroundColor: 'white',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#888',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#128C7E',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: 'white',
    fontSize: 17,
    textAlign: 'left',
  },
  button: {
    backgroundColor: '#128C7E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#45BFB4',
  },
});

export default Home;
