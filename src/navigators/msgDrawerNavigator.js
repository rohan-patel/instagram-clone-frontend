import {useWindowDimensions} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './tabNavigator';
import Messages from '../screens/Messages';
import {selectDrawerSwipeEnabled} from '../redux-store/slices/appSlice';

const MsgDrawer = createDrawerNavigator();

function MsgDrawerNavigator({navigation}) {
  const dimensions = useWindowDimensions();
  const drawerSwipeEnabled = useSelector(selectDrawerSwipeEnabled);
  return (
    <MsgDrawer.Navigator
      id="DirectMessages"
      drawerContent={props => <Messages {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'slide',
        headerShown: false,
        drawerStyle: {width: dimensions.width},
        swipeEnabled: drawerSwipeEnabled,
      }}>
      <MsgDrawer.Screen name="MsgDrawer" component={TabNavigator} />
    </MsgDrawer.Navigator>
  );
}

export default MsgDrawerNavigator;
