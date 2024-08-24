import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThankYou = ({ route , navigation }) => {

  const { userName } = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 2500); 

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.thankYouText}>Thanks for your order, {userName}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fef5f7',
  },
  thankYouText: {
    fontSize: 24.5,
    fontWeight: 'bold',
    color: '#ed505f',
  },
});

export default ThankYou;
