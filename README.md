# Italiano Pizaa
Italiano Pizza is a React Native application developed using the Expo framework. This project implements a simple food ordering interface with multiple screens for navigation, including a home screen, contact screen, bill summary, personal details, and a thank you screen. The app uses context to manage global state across different components.

# Features
**Tab Navigation**: The app features a bottom tab navigation with options for Home and Contact screens.
**Stack Navigation**: Implements stack navigation for transitioning between the splash screen, home, bill summary, personal details, and a thank you screen.
**Global State Management**: Uses context (QuantityProvider) to manage the quantity of items globally across different screens.
**Custom Icons**: Utilizes react-native-vector-icons for custom tab icons.
**Responsive Design**: Supports both iOS and Android devices with tablet support.

# Getting Started
Prerequisites
Node.js
Expo CLI
React Native development environment
Installation
Clone the repository:

bash

```git clone https://github.com/your-username/finalproject2.git```
```cd finalproject2```
Install dependencies:


```npm install```
Start the project:


```npm start```
You can also run it on specific platforms:


```npm run android```
```npm run ios```
```npm run web```

# Project Structure
**App.js**: Entry point of the application. Sets up navigation and context.
**components/**: Contains the individual components for the screens like SplashScreen, Home, Contact, Bill, PersonalDetails, and ThankYou.
**assets/**: Holds the images for icons, splash screens, etc.
**Dependencies**
Key dependencies used in this project include:

expo: ~51.0.28
react-native: 0.74.5
react: 18.2.0
@react-navigation/native: Navigation library for React Native.
@react-navigation/stack: Stack navigator for screen transitions.
@react-navigation/bottom-tabs: Bottom tab navigator for the main menu.
react-native-vector-icons: Icon library for custom icons.
For the full list of dependencies, check the package.json file.

**Configuration**
The project is configured using the following files:

app.json: Contains the app configuration like the name, version, splash screen settings, and platform-specific configurations.
babel.config.js: Babel configuration for compiling the JavaScript code.
