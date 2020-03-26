import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FoodForm from './src/component/FoodForm';
import FoodList from './src/component/FoodList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import configureStore from './src/store';
const Stack = createStackNavigator();

const store = configureStore();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Form'>
        <Stack.Screen name='List' component={FoodList}></Stack.Screen>
        <Stack.Screen name='Form' component={FoodForm}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return <Provider store={store}>
    <App />
  </Provider>
};