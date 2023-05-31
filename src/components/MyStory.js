import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import StoryCircle from '../assets/svg/storyCircle';
import Plus from '../assets/svg/plus';
import {colors} from '../config/colors';

export class MyStory extends Component {
  render() {
    return (
      <View>
        <View style={{width: 5}} />
        <View style={styles.myStoryImageWrapper}>
          {/* <View style={styles.noStoryCircle} /> */}
          <StoryCircle
            width={85}
            height={85}
            strokeWidth={2}
            stroke={colors.secodary}
          />

          <Image
            style={styles.otherStories}
            source={require('../assets/images/face.jpeg')}
          />

          <View style={styles.plusIconWrapper}>
            <Plus
              width={12}
              height={12}
              strokeWidth={8}
              stroke={colors.secodary}
            />
          </View>

          <Text style={styles.myStoryText}>Your story</Text>
        </View>
      </View>
    );
  }
}

export default MyStory;

export const styles = StyleSheet.create({
  myStoryImageWrapper: {
    alignItems: 'center',
  },

  otherStories: {
    position: 'absolute',
    width: 65,
    height: 65,
    borderRadius: 50,
    marginTop: 10.75,
    zIndex: 5,
  },

  plusIconWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    width: 20,
    height: 20,
    backgroundColor: colors.primary,
    borderWidth: 1.75,
    borderColor: colors.secodary,
    borderRadius: 50,
    top: 57,
    left: 57,
  },

  myStoryText: {
    color: colors.black,
    fontSize: 11,
  },
});
