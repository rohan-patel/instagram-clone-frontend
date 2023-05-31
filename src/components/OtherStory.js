import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import StoryCircle from '../assets/svg/storyCircle';
import {colors} from '../config/colors';

export class OtherStory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={styles.otherStoryImageWrapper}>
          {/* <View style={styles.viewedStoryCircle} /> */}
          <StoryCircle
            width={85}
            height={85}
            strokeWidth={2}
            stroke={this.props.viewed ? colors.gray1 : null}
          />
          <Image
            style={styles.otherStories}
            source={require('../assets/images/face.jpeg')}
          />
          <Text style={styles.myStoryText}>Catherine</Text>
        </View>
      </View>
    );
  }
}

export default OtherStory;

export const styles = StyleSheet.create({
  otherStoryImageWrapper: {
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

  myStoryText: {
    color: colors.black,
    fontSize: 11,
  },
});
