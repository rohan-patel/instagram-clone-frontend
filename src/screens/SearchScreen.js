import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../config/colors';
import SeacrhBox from '../components/SeacrhBox';
import SearchBar from '../components/SearchBar';
import PostGrid from '../components/PostGrid';

import Home from '../assets/svg/home';
import Search from '../assets/svg/search';
import Add from '../assets/svg/add';
import Reel from '../assets/svg/reel2';
import Profile from '../assets/svg/profile';

import {useDispatch, useSelector} from 'react-redux';
import {
  selectIsHomeActive,
  setHomeActive,
  setHomeInactive,
} from '../redux-store/slices/appSlice';

const SearchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
      <View style={{flex: 1}}>
        <PostGrid />
      </View>
      {/* <View style={styles.footer}>
        <TouchableOpacity>
          <Home width={25} height={25} fill={'#000'} />
        </TouchableOpacity>
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
      </View> */}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: colors.secodary,
    flex: 1,
  },
  searchBar: {
    padding: 10,
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

  profilePic: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderRadius: 50,
    marginTop: 5,
  },
});
