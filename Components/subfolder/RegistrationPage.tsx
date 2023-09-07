import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';

interface RegistrationPageProps {
  isVisible: boolean;
  onClose: () => void;
  onCheckout: (name: string, address: string, mobileNumber: string) => void;
  totalAmount: number;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({
  isVisible,
  onClose,
  onCheckout,
  totalAmount,
}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // State variables for error messages
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');

  // Validation functions
  const validateName = () => {
    if (!name) {
      setNameError('Name is required');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateAddress = () => {
    if (!address) {
      setAddressError('Address is required');
      return false;
    }
    setAddressError('');
    return true;
  };

  const validateMobileNumber = () => {
    const mobileNumberPattern = /^[0-9]{10}$/;
    if (!mobileNumber) {
      setMobileNumberError('Mobile Number is required');
      return false;
    }
    if (!mobileNumber.match(mobileNumberPattern)) {
      setMobileNumberError('Invalid Mobile Number');
      return false;
    }
    setMobileNumberError('');
    return true;
  };

  const handleCheckout = () => {
    // Validate the form fields
    const isNameValid = validateName();
    const isAddressValid = validateAddress();
    const isMobileNumberValid = validateMobileNumber();

    // If all fields are valid, proceed with checkout
    if (isNameValid && isAddressValid && isMobileNumberValid) {
      onCheckout(name, address, mobileNumber);
      onClose();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.popupContainer}>
        <View style={styles.popup}>
          <Text style={styles.header}>Checkout</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={text => setName(text)}
          />
          <Text style={styles.errorText}>{nameError}</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            onChangeText={text => setAddress(text)}
          />
          <Text style={styles.errorText}>{addressError}</Text>
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            onChangeText={text => setMobileNumber(text)}
          />
          <Text style={styles.errorText}>{mobileNumberError}</Text>
          <Text style={styles.totalAmount}>Total Amount: ${totalAmount}</Text>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={handleCheckout} 
          >
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  popupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  checkoutButton: {
    backgroundColor: '#128C7E',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
  totalAmount: {color: 'black', fontWeight: 'bold'},
});

export default RegistrationPage;
