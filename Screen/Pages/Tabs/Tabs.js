import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Signup from '../Signup';
import Login from '../Login';
import Octicons from 'react-native-vector-icons/Octicons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
tabBarLabelStyle:{fontSize:15},
        tabBarActiveTintColor: '#e91e63',
        tabBarStyle: {
            borderRadius: 20,
    
            margin: 10,
        
          
        },
      }}>
      <Tab.Screen
        name="Signup"
        component={Signup}
        options={{
          tabBarIcon: () => (
            <Octicons name="sign-in" size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="login" size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs

const styles = StyleSheet.create({})           