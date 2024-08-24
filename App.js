import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SplashScreen from './components/splashScreen';
import Contact from './components/Contact';
import Home from './components/Home';
import Bill from './components/Bill';
import PersonalDetails from './components/personslDetails';
import { QuantityProvider } from './components/QuantityContext'; 
import ThankYou from './components/Thanks';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Contact':
              iconName = 'call';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e52321',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Bill" component={Bill} />
      <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
      <Stack.Screen name="ThankYou" component={ThankYou}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <QuantityProvider> 
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </QuantityProvider>
  );
}
