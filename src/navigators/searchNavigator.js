import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchPrimary from '../screens/SearchPrimary';
import SearchSeconndary from '../screens/SearchSeconndary';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

function SearchNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'none'}}
      initialRouteName="Feed">
      <Stack.Screen name="SearchPrimary" component={SearchPrimary} />
      <Stack.Screen name="SearchSecondary" component={SearchSeconndary} />
      <Stack.Screen name="SearchedProfile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default SearchNavigator;
