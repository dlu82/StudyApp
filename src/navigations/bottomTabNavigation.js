import {View, Text, StyleSheet} from 'react-native';
import Home from '../screens/HomeScreen';
import Search from '../screens/SearchScreen';
import Learn from '../screens/LearnScreen';
import Help from '../screens/HelpScreen';
import Account from '../screens/AccountScreen';
import HomeIcon from '../assets/Icons/Home.svg';
import SearchIcon from '../assets/Icons/Search.svg';
import LearnIcon from '../assets/Icons/Learning.svg';
import HelpIcon from '../assets/Icons/Help.svg';
import UserIcon from '../assets/Icons/user.svg';
import { useNavigation } from '@react-navigation/native';

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomNavigation = () => {
  const BottomTab = createBottomTabNavigator();
const navigation = useNavigation()

  return (
    <BottomTab.Navigator backBehavior={'history'} initialRouteName={'Home'}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
          headerShown: false,
          tabBarIcon: ({}) => <HomeIcon />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
          headerShown: false,
          tabBarIcon: ({}) => <SearchIcon />,
        }}
      />
      <BottomTab.Screen
        name="Learning"
        component={Learn}
        options={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
          headerShown: false,
          tabBarIcon: ({}) => <LearnIcon />,
        }}
      />
      <BottomTab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
          headerShown: false,
          tabBarIcon: ({}) => <HelpIcon />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
          headerShown: false,
          tabBarIcon: ({}) => <UserIcon />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
