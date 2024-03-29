import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

function FeedNavigator({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Feed">
      <Stack.Screen name="Home" component={FeedScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default FeedNavigator;
