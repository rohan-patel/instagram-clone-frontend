import {Text, View, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config/colors';
import Heart from '../assets/svg/heart';
import Comment from '../assets/svg/comment';
import Send from '../assets/svg/send';
import Save from '../assets/svg/save';
import Menu from '../assets/svg/menuHorizontal';

export class Feed extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Feed Header */}
        <View style={styles.headerWrapper}>
          <View style={styles.headerLeftWrapper}>
            <Image
              style={styles.profileThumb}
              source={require('../assets/images/face.jpeg')}
            />
            <Text style={styles.headerTitle}>{'   '}catherine</Text>
          </View>
          <Menu width={25} height={25} />
        </View>

        {/* Feed Image */}
        <View style={styles.image}>
          <Image
            style={styles.feedImage}
            source={require('../assets/images/feedImage.jpg')}
          />
        </View>

        {/* Heart, Comment, Send and Save Icons */}
        <View style={styles.feedImageFooter}>
          <View style={styles.feedImageFooterLeftWrapper}>
            <View style={styles.feedFooterIcon}>
              {/* <Heart
                width={30}
                height={30}
                strokeWidth={5}
                fill={'#FD1D1D'}
                stroke="#FD1D1D"
              /> */}
              <Heart width={30} height={30} strokeWidth={5} />
            </View>
            <View style={styles.feedFooterIcon}>
              <Comment width={30} height={30} strokeWidth={2.5} />
            </View>
            <View style={styles.feedFooterIcon}>
              <Send width={30} height={30} strokeWidth={2.15} />
            </View>
          </View>
          <Save width={30} height={30} fill={'#000'} strokeWidth={2.25} />
        </View>
        {/* <View style={styles.underlineWrapper}>
          <View style={styles.underline} />
        </View> */}

        {/* Likes */}
        <View style={styles.likesAndCommentsWrapper}>
          <Text style={styles.likesTitle}>{'  '}12,632 likes</Text>
          <Text>
            {' '}
            <Text style={styles.captionUserTitle}> sarcastic_us</Text>
            <Text style={styles.captionTitle}> Author ...</Text>
          </Text>
          <Text>
            {'  '}
            <Text style={styles.comments}>View all 113 comments</Text>
          </Text>
        </View>

        {/* Caption */}
      </View>
    );
  }
}

export default Feed;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingBottom: 15,
  },

  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderTopWidth: 1,
    padding: 15,
    paddingBottom: 7,
    paddingTop: 10,
  },

  headerLeftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
  },

  image: {},

  feedImage: {
    width: '100%',
  },

  feedImageFooter: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  feedImageFooterLeftWrapper: {
    flexDirection: 'row',
  },

  feedFooterIcon: {
    marginRight: 10,
  },

  likesAndCommentsWrapper: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // padding: 15,
    paddingLeft: 7,
  },

  likesImage: {
    width: 20,
    height: 20,
  },

  likesTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.black,
  },

  captionUserTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.black,
  },

  captionTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.black,
  },

  comments: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.darkgray,
  },

  profileThumb: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },

  icon: {
    width: 40,
    height: 40,
    opacity: 0.5,
  },

  underlineWrapper: {
    marginLeft: 10,
    marginRight: 10,
  },

  underline: {
    height: 1,
    backgroundColor: colors.gray1,
  },
});
