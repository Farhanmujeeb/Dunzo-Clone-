import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

type CourierProps = {
  onSave: (data: {
    senderName: string;
    recipientName: string;
    pickupAddress: string;
    deliveryAddress: string;
  }) => void;
};

const Courier: React.FC<CourierProps> = ({ onSave }) => {
  const [senderName, setSenderName] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleSave = () => {
    if (
      senderName.trim() !== '' &&
      recipientName.trim() !== '' &&
      pickupAddress.trim() !== '' &&
      deliveryAddress.trim() !== ''
    ) {
      onSave({
        senderName: senderName,
        recipientName: recipientName,
        pickupAddress: pickupAddress,
        deliveryAddress: deliveryAddress,
      });
      setSenderName('');
      setRecipientName('');
      setPickupAddress('');
      setDeliveryAddress('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Sender's Name"
        value={senderName}
        onChangeText={(text) => setSenderName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Recipient's Name"
        value={recipientName}
        onChangeText={(text) => setRecipientName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Pickup Address"
        value={pickupAddress}
        onChangeText={(text) => setPickupAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Delivery Address"
        value={deliveryAddress}
        onChangeText={(text) => setDeliveryAddress(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Request Courier</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 4,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#128C7E',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Courier;
