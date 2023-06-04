import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Profile from '../assets/svg/profile';
import {colors} from '../config/colors';

const FooterTabProfile = ({focus}) => {
  return (
    <View style={focus ? styles.profileCoverBorder : styles.profileCover}>
      <Profile width={30} height={30} fill={colors.secodary} />
      <Image
        style={styles.profilePic}
        source={require('../assets/images/face.jpeg')}
      />
    </View>
  );
};

export default FooterTabProfile;

const styles = StyleSheet.create({
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

  profileCoverBorder: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: colors.black,
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
});
