import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getDrawerStatusFromState} from '@react-navigation/drawer';
import FeedNavigator from './feedNavigator';
import SearchNavigator from './searchNavigator';
import SearchScreen from '../screens/SearchPrimary';
import AddPostScreen from '../screens/AddPostScreen';
import ReelScreen from '../screens/ReelScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Home from '../assets/svg/home';
import Search from '../assets/svg/search';
import FooterTabProfile from '../components/FooterTabProfile';
import Add from '../assets/svg/add';
import Reel from '../assets/svg/reel2';
import {
  selectIsHomeActive,
  setDrawerSwipeDisabled,
  setDrawerSwipeEnabled,
  setHomeActive,
  setHomeInactive,
} from '../redux-store/slices/appSlice';
import {DrawerActions} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const AddPost = () => {
  return null;
};

function TabNavigator({navigation}) {
  const dispatch = useDispatch();
  const isHomeActive = useSelector(selectIsHomeActive);
  let isDrawerOpen = getDrawerStatusFromState(
    navigation.getParent('Post').getState(),
  );

  useEffect(() => {
    console.log(isDrawerOpen);
  }, [isDrawerOpen]);

  return (
    <Tab.Navigator
      id="tabs"
      screenOptions={({route}) => ({
        tabBarStyle: {position: 'absolute'},
        tabBarIcon: ({focused, color, size}) => {
          let iconComponent;
          if (route.name === 'Feed') {
            iconComponent = focused ? (
              <Home width={30} height={30} fill={'#000'} />
            ) : (
              <Home width={30} height={30} strokeWidth={18} />
            );
          } else if (route.name === 'Search') {
            iconComponent = focused ? (
              <Search width={25} height={25} strokeWidth={0.75} />
            ) : (
              <Search width={25} height={25} strokeWidth={0.15} />
            );
          } else if (route.name === 'Profile') {
            iconComponent = focused ? (
              <FooterTabProfile focus={true} />
            ) : (
              <FooterTabProfile focus={false} />
            );
          } else if (route.name === 'Add') {
            iconComponent = <Add width={25} height={25} />;
          } else if (route.name === 'Reels') {
            iconComponent = <Reel width={25} height={25} />;
          }

          return iconComponent;
        },
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        listeners={{
          focus: e => {
            dispatch(setHomeActive());
            dispatch(setDrawerSwipeEnabled());
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchNavigator}
        listeners={{
          focus: e => {
            dispatch(setHomeInactive());
            dispatch(setDrawerSwipeDisabled());
          },
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddPostScreen}
        listeners={() => ({
          tabPress: e => {
            if (isHomeActive) {
              dispatch(setDrawerSwipeEnabled());
            } else {
              dispatch(setDrawerSwipeDisabled());
            }
            navigation.getParent('Post').dispatch(DrawerActions.openDrawer());
            e.preventDefault();
          },
        })}
      />
      <Tab.Screen
        name="Reels"
        component={ReelScreen}
        listeners={{
          focus: e => {
            dispatch(setHomeInactive());
            dispatch(setDrawerSwipeDisabled());
          },
        }}
        options={{tabBarStyle: {display: 'none'}}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        listeners={{
          focus: e => {
            dispatch(setHomeInactive());
            dispatch(setDrawerSwipeDisabled());
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
