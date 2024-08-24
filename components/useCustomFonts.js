import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

const useCustomFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
    'OpenSans-Regular': require('../assets/OpenSans_400Regular.ttf'),
    'OpenSans-Bold': require('../assets/OpenSans_700Bold.ttf'),
    'OpenSans-light': require('../assets/OpenSans_300Light.ttf'),
    'OpenSans-Medium': require('../assets/OpenSans_500Medium.ttf'),
    'OpenSans-SemiBold': require('../assets/OpenSans_600SemiBold.ttf'),
   });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};

  const sampleData = [
    { name: 'Chicken Alfredo', price: '18.99', description: 'Creamy Alfredo sauce with grilled chicken.', image: require('../assets/pizza1') },
    { name: 'Margherita Pizza', price: '12.99', description: 'Delicious pizza with fresh tomatoes.', image: require('../assets/pizza2') },
    { name: 'Caesar Salad', price: '10.99', description: 'Crisp romaine with Caesar dressing.', image: require('../assets/pizza3') },
    { name: 'Beef Tacos', price: '14.99', description: 'Spicy beef tacos with all the fixings.', image: require('../assets/pizza4') },
    { name: 'Vegetable Stir Fry', price: '13.99', description: 'Mixed vegetables stir-fried in a savory sauce.', image: require('../assets/pizza5') },
    { name: 'Margherita Pizzaa', price: '12.99', description: 'Delicious pizza with fresh tomatoes.', image: require('../assets/pizza6') },
    { name: 'Caesar Saladd', price: '10.99', description: 'Crisp romaine with Caesar dressing.', image: require('../assets/pizza7') },
    { name: 'Beef Tacoss', price: '14.99', description: 'Spicy beef tacos with all the fixings.', image: require('../assets/pizza8') },
    { name: 'Vegetable Stir Fryyy', price: '13.99', description: 'Mixed vegetables stir-fried in a savory sauce.', image: require('../assets/pizza9') },
  ];

export default useCustomFonts;