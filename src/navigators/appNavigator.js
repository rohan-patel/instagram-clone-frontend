import {View, Text, Button, useWindowDimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchPrimary';
import Home from '../assets/svg/home';
import Search from '../assets/svg/search';
import FooterTabProfile from '../components/FooterTabProfile';
import Add from '../assets/svg/add';
import Reel from '../assets/svg/reel2';
import AddPostScreen from '../screens/AddPostScreen';
import ReelScreen from '../screens/ReelScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Messages from '../screens/Messages';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectDrawerSwipeEnabled,
  selectIsHomeActive,
  setHomeActive,
  setHomeInactive,
} from '../redux-store/slices/appSlice';

import AddDrawerNavigator from './addDrawerNavigator';
import SearchNavigator from './searchNavigator';

const AppNavigator = () => {
  return <AddDrawerNavigator />;
};

export default AppNavigator;
