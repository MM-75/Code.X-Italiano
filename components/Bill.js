import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { QuantityContext } from './QuantityContext';

const BillCard = ({ dish, onIncrease, onDecrease, onDelete }) => (
  
  <Card containerStyle={styles.card}>
    <View style={styles.cardContent}>
      <View style={styles.leftContainer}>
        <Text style={styles.dishName}>{dish.name}</Text>
        <Text style={styles.price}>${dish.price}</Text>
        
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.quantityContainer}>
          {dish.quantity > 1 ? (
            <TouchableOpacity onPress={() => onDecrease(dish)} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => onDelete(dish)} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.quantity}>{dish.quantity}</Text>
          <TouchableOpacity onPress={() => onIncrease(dish)} style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.totalPrice}>${(dish.price * dish.quantity).toFixed(2)}</Text>
      </View>
    </View>
  </Card>
);

const Bill = ({ route, navigation }) => {
  const { selectedDishes, updateQuantity, removeDish, clearDishes } = useContext(QuantityContext);
  const [billItems, setBillItems] = useState(selectedDishes);

 useEffect(() => {
   
  setBillItems(selectedDishes);
}, [selectedDishes]);

  useEffect(() => {
    if (billItems.length === 0) {
      navigation.navigate('Home');
    }
  }, [billItems, navigation]);

  const handleIncrease = (dish) => {
    updateQuantity(dish, 'increase');
  };

  const handleDecrease = (dish) => {
    updateQuantity(dish, 'decrease');
    if (dish.quantity === 1) {
      removeDish(dish);
    }
  };

  const handleDelete = (dish) => {
    removeDish(dish);
    setBillItems(billItems.filter(item => item.name !== dish.name));
    if (billItems.length === 1) {
      handleClearBill();
    }
  };

  const total = billItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  
  const handleSubmit = () => {
    navigation.navigate('PersonalDetails', {
      billItems,
      handleClearBill
    });
  };

  const handleClearBill = () => {
    setBillItems([]);
    clearDishes(); 
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="chevron-back-outline" size={20} color="black" style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Bill</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.text1}>ITEM(S) ADDED</Text>
        <FlatList
          data={billItems}
          style={styles.flatlist}
          renderItem={({ item }) => (
            <BillCard
              dish={item}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onDelete={handleDelete}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.listContainer}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="add-circle-outline" size={20} color="blue" style={styles.ionicon2} />
          <Text style={styles.addButtonText}>Add more items</Text>
          <Ionicons name="chevron-forward-outline" size={18} color="#48494B" style={styles.ionicon3} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleClearBill}
        >
          <Ionicons name="close-circle-outline" size={20} color="red" style={styles.ionicon2} />
          <Text style={styles.cancelButtonText}>Clear all the Items</Text>
          <Ionicons name="chevron-forward-outline" size={18} color="#48494B" style={styles.ionicon4} />
        </TouchableOpacity>
        <Card containerStyle={styles.totalCard}>
          <View style={styles.totalContainer}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalAmount}>${total}</Text>
          </View>
        </Card>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            <Text style={styles.submitText}>Add personal details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  headerContainer:{
    flexDirection:'row'
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 26,
    marginTop:30,
  },
  text1:{
     alignSelf:'center',
     fontSize:15,
     marginTop:25,
     margin:10
  },
  card:{
     height:80,
     width:340,
     borderRadius: 20,
     elevation: 1,
     alignSelf:'center',
     margin:0,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer:{
     flexDirection:'column',
     marginTop:5,
     justifyContent:'flex-start',
     flex:1
  },
  dishName: {
    fontWeight: 'bold',
    fontSize: 16, 
    marginBottom:20,
  },

  price:{
    fontSize:14,
    bottom:15,
  },
  rightContainer:{
    flex:1,
    flexDirection:'column',
    alignItems:'flex-end' 
  },
  totalCard: {
    marginVertical: 20,
    height:50,
    width:340,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignSelf:'center',
    padding:3,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop:9,
    paddingLeft:5,
    paddingRight:5,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf:'center',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ed505f',
    alignSelf:'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    backgroundColor:'#fff',
  },
  cancelButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection:'row',
    height:50,
    width:340,
    marginTop:0,
  },
  submitButton: {
    backgroundColor: '#ed505f',
    padding: 7,
    flex: 1,
    alignItems: 'center',
    borderRadius:5,
    height:45,
    justifyContent:'center',
  },
  cancelButtonText: {
    color: '#48494B',
    fontSize: 16,
    marginStart:5,
  },
  submitText: {
    color: 'white',
    fontSize:20,
  },
  arrow: {
    marginTop: 40,
  },
  quantityButton: {
    backgroundColor: '#fef5f7',
    borderRadius: 5,
    width: 13,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center'
  },
  quantityButtonText: {
    fontSize: 12,
    color: '#ed505f',
  },
  addButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection:'row',
    height:50,
    width:340,
    marginTop:20,
    marginBottom:0,
  },
  addButtonText: {
    color: '#48494B',
    fontSize: 16,
    marginStart:5,
  },

  ionicon2:{
    marginStart:7,
  },
  ionicon3:{
    marginStart:170,
  },
  ionicon4:{
    marginStart:155,
  },
  quantityContainer: {
    flexDirection: 'row',
    backgroundColor: '#fef5f7',
    borderRadius: 7.5,
    width: 80,
    height: 21,
    justifyContent: 'space-between',
    bottom: 15,
    borderColor: '#ed505f',
    borderWidth: 1,
    marginTop:25,
    marginRight:5,
  },
  quantity:{
    fontSize:13,
    alignSelf:'center'
  },
  totalPrice:{
    fontSize:15,
    bottom:12,
    marginRight:5,
    fontWeight:'semiBold',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  flatlist:{
    marginBottom:20
  }
});

export default Bill;