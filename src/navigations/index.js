import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen' 
import BottomNavigation from './bottomTabNavigation'
import DetailPage from '../screens/DetailPage'
import Toptab from '../components/Toptab'
import SearchPage from '../screens/SearchScreen'
import Learning from '../screens/LearnScreen'

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator backBehaviour = "initialRoute">
      <Stack.Screen name= "HomeScreen" component={BottomNavigation} options={{headerShown: false,}}/>
      <Stack.Screen name= "DetailPage" component={DetailPage} options={{headerShown: false,}}/>
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
