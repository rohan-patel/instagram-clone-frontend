import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ProfilePost = uri => {
  // console.log(uri.item);

  return <View style={styles.container}>{uri.item.img}</View>;
};

export default ProfilePost;

const styles = StyleSheet.create({
  container: {
    postWrapper: {
      flex: 1,
      minWidth: '33.33%',
      maxWidth: '33.33%',
      aspectRatio: 0.85,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 1,
    },
  },
});
