import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { QuantityContext } from './QuantityContext';

const DishList = ({ navigation }) => {
  const { selectedDishes, addDish, updateQuantity } = useContext(QuantityContext);
  const [showBill, setShowBill] = useState(false);

  useEffect(() => {
    setShowBill(selectedDishes.length > 0);
  }, [selectedDishes]);

  const handleFormSubmit = () => {
    navigation.navigate('Bill', {
      dishes: selectedDishes,
      clearDishes: () => setSelectedDishes([]),
    });
  };

  const sampleData = [
    { name: 'Italiano Pizza', price: 12.99, description: 'Cheese, Chicken, Mushroom.', image: require('../assets/pizza3') },
    { name: 'Vegetable Pizza', price: 11.99, description: 'Cheese, Capsicum, Mushroom, Olives.', image: require('../assets/pizza6') },
    { name: 'Sicilian Pizza', price: 12.99, description: 'Cheese, Pepperoni, Olives.', image: require('../assets/pizza2') },
    { name: 'Jalapeno Pizza', price: 15.99, description: 'Cheese, Pepperoni, Jalapeno.', image: require('../assets/pizza5') },
    { name: 'Mama Rosa Pizza', price: 12.99, description: 'Cheese, Pepperoni, Pineapple.', image: require('../assets/pizza9') },
    { name: 'Mexican Pizza', price: 12.99, description: 'Cheese, Chicken, Olives, Hot Pepper.', image: require('../assets/pizza4') },
    { name: 'Roma Pizza', price: 13.99, description: 'Cheese, Veal, Capsicum.', image: require('../assets/pizza7') },
    { name: 'Shrimp Pizza', price: 14.99, description: 'Cheese, Olives, Shrimp.', image: require('../assets/pizza8') },
    { name: 'Corn Pizza', price: 11.99, description: 'Cheese, Corn.', image: require('../assets/pizza1') },
  ];

  const renderItem = ({ item }) => {
    const { name, price, description, image } = item;
    const selectedDish = selectedDishes.find(dish => dish.name === name);

    return (
      <Card containerStyle={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.rightContainer}>
            <Text numberOfLines={1} style={styles.dishName}>{name}</Text>
            <Text numberOfLines={1} style={styles.price}>${price.toFixed(2)}</Text>
            <Text numberOfLines={3} style={styles.description}>{description}</Text>
          </View>
          <View style={styles.leftContainer}>
            <Image source={image} style={styles.image} />
            {selectedDish ? (
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => updateQuantity(item, 'decrease')} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{selectedDish.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item, 'increase')} style={styles.quantityButton}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity style={styles.addButton} onPress={() => addDish(item)}>
                <Text style={styles.plus}>+</Text>
                <Text numberOfLines={1} style={styles.addButtonText}>ADD</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.topContainer}>
          <Image source={require('../assets/wrap')} style={styles.logo} />
          <Image source={require('../assets/logo')} style={styles.pic} />
          <Text style={styles.text}> Italiano-إيطاليانو </Text>
          <Text numberOfLines={2} style={styles.description2}> Pizza - Fast Food - Shawarma. </Text>
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            data={sampleData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </ScrollView>
      {showBill && (
        <TouchableOpacity style={styles.billButton} onPress={handleFormSubmit}>
          <Text style={styles.billButtonText}>Go to your bill</Text>
          <Ionicons name="arrow-forward-circle" size={20} style={styles.ionicon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  card: {
    borderRadius: 20,
    padding: 0,
    elevation: 4,
    backgroundColor: '#fff',
    height: 200,
    width: 345,
    right: 7,
  },
  cardContent: {
    flexDirection: 'row',
    height: '100%',
  },
  leftContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 50,
    alignSelf: 'center',
    marginRight: 7,
    top: 10
  },
  dishName: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'flex-start',
    width: '100%',
    fontFamily: 'Roboto',
    color: 'black',
    marginTop: 30,
    left: 3,
    fontStyle: 'italic'
  },
  rightContainer: {
    flex: 2,
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    marginLeft: 9
  },
  description: {
    fontSize: 14,
    color: '#545454',
    marginLeft: 5,
    marginTop: 14,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontStyle: 'italic'
  },
  price: {
    fontSize: 17.5,
    color: 'black',
    fontWeight: '700',
    marginTop: 10,
    fontFamily: 'Roboto',
  },
  addButton: {
    backgroundColor: '#fef5f7',
    borderRadius: 10,
    width: 100,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 15,
    borderColor: '#ed505f',
    borderWidth: 1,
    marginLeft: 2,
    padding: 7.5,
  },
  addButtonText: {
    color: '#ed505f',
    fontSize: 21,
    fontWeight: 'bold',
    bottom: 12,
    fontFamily: 'Roboto',
  },
  listContainer: {
    paddingBottom: 10,
  },
  billButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ed505f',
    padding: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    justifyContent: 'center'
  },
  topContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'flex-start'
  },
  text: {
    fontSize: 25,
    left: 135,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    bottom: 119,
    fontStyle: 'italic'
  },
  logo: {
    width: '100%',
    height: '100%',
    contentFit: "contain",
  },
  pic: {
    width: 130,
    height: 130,
    borderRadius: 100,
    bottom: 35,
  },
  description2: {
    fontSize: 16,
    left: 130,
    bottom: 116,
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontWeight: '600',
  },
  bottomContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    top: 95,
    marginBottom: 80,
  },
  plus: {
    alignSelf: 'flex-end',
    color: '#ff5757',
    fontFamily: 'Roboto',
  },
  quantityContainer: {
    flexDirection: 'row',
    backgroundColor: '#ed505f',
    borderRadius: 10,
    width: 100,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'space-between',
    bottom: 15,
    borderColor: '#ff5757',
    borderWidth: 1,
    marginLeft: 2,
    padding: 7.5,
  },
  quantityButton: {
    backgroundColor: '#ed505f',
    borderRadius: 5,
    width: 15,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: '#fef5f7',
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  quantityText: {
    fontSize: 20,
    color: '#fef5f7',
    fontWeight: 'bold',
    bottom: 3,
    alignSelf: 'center',
    fontFamily: 'Roboto',
  },
  billButtonText: {
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#fef5f7',
    marginHorizontal: 7,
    fontStyle: 'italic'
  },
  ionicon: { 
    color: "#fef5f7",
    marginTop: 3
  }
});

export default DishList;
