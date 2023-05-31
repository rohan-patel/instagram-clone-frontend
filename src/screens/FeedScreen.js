import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config/colors';
import Feed from '../components/Feed';
import Stories from '../components/Stories';
import Messenger from '../assets/svg/messenger';
import Home from '../assets/svg/home';
import Search from '../assets/svg/search';
import Add from '../assets/svg/add';
import Reel from '../assets/svg/reel2';
import InstaLogo from '../assets/svg/instaLogo';
import Profile from '../assets/svg/profile';
import Heart from '../assets/svg/heart';
import {logout} from '../functions/auth';
import {useDispatch} from 'react-redux';
import {setSignOut} from '../redux-store/slices/authSlice';
import UserInfoSecuredDBGateway from '../storage/userInfo';
// import Search from '../';

const FeedScreen = ({navigation}) => {
  // navigation.replace('Login');

  // navigation.reset({
  //   index: 0,
  //   routes: [{name: 'Feed'}],
  // });

  const dispatch = useDispatch();

  const handleLogout = () => {
    logout();
    dispatch(setSignOut());
    const userInfo = UserInfoSecuredDBGateway.load();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <InstaLogo size={0.65} />
          </TouchableOpacity>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Heart width={30} height={30} strokeWidth={5} />
          </TouchableOpacity>
          <View style={{width: 20}} />
          <TouchableOpacity>
            <Messenger strokeWidth={2.5} width={27} height={27} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.feedConntainer}>
        <View style={styles.storiesWrapper}>
          <Stories />
        </View>
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Feed />
        <Button title="Logout" onPress={handleLogout} />
      </ScrollView>

      <View style={styles.footer}>
        <Home width={25} height={25} fill={'#000'} />
        {/* <Search width={25} height={25} strokeWidth={0.75} /> */}
        <Search width={25} height={25} strokeWidth={0.15} />
        <Add width={25} height={25} />
        <Reel width={25} height={25} />
        <View style={styles.profileCover}>
          <Profile width={30} height={30} fill={colors.secodary} />
          <Image
            style={styles.profilePic}
            source={require('../assets/images/face.jpeg')}
          />
        </View>
      </View>
    </View>
  );
};

export default FeedScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.secodary,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomColor: colors.gray1,
    // borderBottomWidth: 1,
  },

  headerLeft: {
    display: 'flex',
    paddingTop: 5,
    alignItems: 'center',
  },

  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 20,
    // bottom: 10,
    // marginTop: 7,
    borderTopColor: colors.gray1,
    borderTopWidth: 1,
    backgroundColor: colors.secodary,
  },

  feedConntainer: {
    display: 'flex',
  },

  icon: {
    width: 40,
    height: 40,
  },

  logo: {
    width: 150,
    height: '100%',
  },

  profileCover: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: colors.darkgray,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    overflow: 'hidden',
  },

  profilePic: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderRadius: 50,
    marginTop: 5,
  },

  storiesWrapper: {
    paddingBottom: 5,
    // paddingRight: 10,
  },
});
