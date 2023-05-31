import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../config/colors';
import StoryCircle from '../assets/svg/storyCircle';

const Highlight = () => {
  return (
    <>
      <View style={{width: 10}} />
      <View style={styles.highlights}>
        <StoryCircle
          width={85}
          height={85}
          strokeWidth={1.5}
          stroke={colors.gray1}
        />
        <Image
          style={styles.highlightImage}
          source={require('../assets/images/face.jpeg')}
        />
        <Text style={styles.highlightTitle}>Catherine</Text>
      </View>
    </>
  );
};

export default Highlight;

const styles = StyleSheet.create({
  highlights: {
    alignItems: 'center',
  },

  highlightImage: {
    position: 'absolute',
    width: 65,
    height: 65,
    borderRadius: 50,
    marginTop: 10.75,
    zIndex: 5,
  },

  highlightTitle: {
    color: colors.black,
    fontSize: 11,
  },
});
