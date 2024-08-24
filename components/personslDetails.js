import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PersonalDetails = ({ route, navigation }) => {
  const { billItems, clearDishes, handleClearBill } = route.params;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
  if (!name || !phone) {
    Alert.alert('Validation Error', 'Please fill in all fields.');
    return;
  }

  console.log('Personal Details:');
  console.log(`Name: ${name}`);
  console.log(`Phone Number: ${phone}`);
  
  console.log('\nBill Summary:');
  console.log('----------------------------------');
  billItems.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} | Quantity: ${item.quantity} | Price: $${item.price.toFixed(2)} | Subtotal: $${(item.price * item.quantity).toFixed(2)}`);
  });
  console.log('----------------------------------');
  
  const totalAmount = billItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  console.log(`Total Amount: $${totalAmount}`);

  handleClearBill();
  navigation.navigate('ThankYou', { userName: name });
};


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}  onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={20} color="black" style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Personal Details</Text>
      </View>
      <Text style ={styles.text1}> Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Text style ={styles.text1}> Phone number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
   headerContainer:{
    flexDirection:'row',
    marginBottom:60,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 23,
    marginTop:30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: '#ed505f',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  submitText: {
    color: '#fef5f7',
    fontWeight: 'bold',
    fontSize: 16,
  },
  arrow: {
    marginTop: 40,
  },
  text1:{
    fontSize:16,
    marginBottom:8
  },
 
});

export default PersonalDetails;
