import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  selectIsLoading,
  selectIsLoggedIn,
  setSignOut,
} from '../redux-store/slices/authSlice';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './appNavigator';
import AuthNavigator from './authNavigator';
import SplashScreen from '../screens/SplashScreen';
import UserInfoSecuredDBGateway from '../storage/userInfo';
import {setSignIn} from '../redux-store/slices/authSlice';
import {useDispatch} from 'react-redux';

const AppRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const initialLoginCheck = async () => {
    const userInfo = await UserInfoSecuredDBGateway.load();
    if (userInfo) {
      // console.log(userInfo);
      const signInDetails = {
        email: userInfo.email,
        phone: userInfo.phone,
        token: userInfo.token,
        userId: userInfo.userId,
        username: userInfo.usernname,
        isLoggedIn: true,
      };
      dispatch(setSignIn(signInDetails));
    } else {
      dispatch(setSignOut());
    }
  };

  useEffect(() => {
    initialLoginCheck();
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <AppNavigator />
      {/* {isLoggedIn ? <AppNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
};

export default AppRoute;
