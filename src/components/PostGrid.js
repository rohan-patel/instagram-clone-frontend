import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {postData} from '../config/postData';
import ProfilePost from './ProfilePost';
import {colors} from '../config/colors';

const PostGrid = () => {
  return (
    <View style={styles.postGridWrapper}>
      {postData.map(item => {
        // console.log(item.uri);
        return (
          <View key={item.id} style={styles.postWrapper}>
            <Image resizeMode="cover" style={styles.post} source={item.uri} />
          </View>
        );
      })}
    </View>
  );
};

export default PostGrid;

const styles = StyleSheet.create({
  postGridWrapper: {
    marginHorizontal: 'auto',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 1,
  },

  postWrapper: {
    flex: 1,
    minWidth: '33.33%',
    maxWidth: '33.33%',
    aspectRatio: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 1,
  },

  post: {
    width: '100%',
    height: '100%',
  },
});
