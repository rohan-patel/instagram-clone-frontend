import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MsgDrawerNavigator from './msgDrawerNavigator';
import AddPostScreen from '../screens/AddPostScreen';
import {selectDrawerSwipeEnabled} from '../redux-store/slices/appSlice';
import FeedScreen from '../screens/FeedScreen';
import ProfileScreen from '../screens/ProfileScreen';

const AddDrawer = createDrawerNavigator();

function AddDrawerNavigator() {
  const dimensions = useWindowDimensions();
  const drawerSwipeEnabled = useSelector(selectDrawerSwipeEnabled);
  return (
    <AddDrawer.Navigator
      id="Post"
      drawerContent={props => <AddPostScreen {...props} />}
      screenOptions={{
        drawerPosition: 'left',
        drawerType: 'slide',
        headerShown: false,
        drawerStyle: {width: dimensions.width},
        swipeEnabled: drawerSwipeEnabled,
      }}>
      <AddDrawer.Screen name="PostDrawer" component={MsgDrawerNavigator} />
    </AddDrawer.Navigator>
  );
}

export default AddDrawerNavigator;
