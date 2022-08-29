import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Screen/Pages/Login';
import Signup from './Screen/Pages/Signup';
import Tabs from './Screen/Pages/Tabs/Tabs';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        
        initialRouteName="Signup"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs} />
        {/*
      <Stack.Screen name="Signup" component={Signup} 
        <Stack.Screen name="Login" component={Login} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
