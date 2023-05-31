import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config/colors';
import StoryCircle from '../assets/svg/storyCircle';
import Plus from '../assets/svg/plus';
import MyStory from './MyStory';
import OtherStory from './OtherStory';

export class Stories extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.storiesHeaderWrapper}>
          <Text style={styles.storiesHeaderText}>Stories</Text>
          <Text style={styles.storiesHeaderText}>Watch All</Text>
        </View> */}

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{width: 7}} />
          <MyStory />
          <View style={{width: 3}} />
          <OtherStory viewed={true} />
          <OtherStory viewed={true} />
          <OtherStory />
          <OtherStory />
          <View style={styles.liveStoryImageWrapper}>
            <Image
              style={styles.liveStoryRound}
              source={require('../assets/images/storieslivecircle.png')}
            />
            <Text style={styles.myStoryText}>Catherine</Text>
          </View>
          <View style={{width: 10}} />
        </ScrollView>
      </View>
    );
  }
}

export default Stories;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },

  storiesHeaderWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  storiesHeaderText: {
    fontSize: 17,
    fontWeight: '700',
  },

  myStoryImageWrapper: {
    alignItems: 'center',
  },

  otherStoryImageWrapper: {
    alignItems: 'center',
  },

  liveStoryImageWrapper: {
    alignItems: 'center',
    marginTop: 5,
  },

  myStoryImage: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 50,
    marginTop: 5,
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

  otherStories: {
    position: 'absolute',
    width: 65,
    height: 65,
    borderRadius: 50,
    marginTop: 10.75,
    zIndex: 5,
  },

  storyRound: {
    width: 70,
    height: 70,
    zIndex: 10,
  },

  noStoryCircle: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },

  viewedStoryCircle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.gray1,
  },

  liveStoryRound: {
    width: 65,
    height: 65,
  },
});
