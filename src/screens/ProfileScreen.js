import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../config/colors';
import LeftArrow from '../assets/svg/leftArrow';
import Menu from '../assets/svg/menuHorizontal';
import AddSuggestion from '../assets/svg/addSuggestion';
import Highlight from '../components/Highlight';
import Grid from '../assets/svg/grid';
import PostHeaderIcon from '../assets/svg/postHeaderIcon';
import PostGrid from '../components/PostGrid';
import {SafeAreaView} from 'react-native';

const ProfileScreen = () => {
  const [isFollowing, setIsFollowing] = useState(true);

  const handlePressed = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeftWrapper}>
          <LeftArrow
            width={30}
            height={30}
            stroke={colors.black}
            strokeWidth={1.5}
          />
          <Text style={styles.headerText}>j4y2102</Text>
        </View>
        <Menu width={20} height={20} />
      </View>

      {/* Profile Section */}
      <ScrollView
        stickyHeaderIndices={[5]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.profilePicWrapper}>
            <Image
              style={styles.profilePic}
              source={require('../assets/images/profilePage/face.jpeg')}
            />
          </View>
          <View style={styles.profileDetails}>
            <View style={styles.profileDetailsColumn}>
              <Text style={styles.profileDetailsNumber}>9</Text>
              <Text style={styles.profileDetailsHeading}>Posts</Text>
            </View>
            <View style={styles.profileDetailsColumn}>
              <Text style={styles.profileDetailsNumber}>627</Text>
              <Text style={styles.profileDetailsHeading}>Followers</Text>
            </View>
            <View style={styles.profileDetailsColumn}>
              <Text style={styles.profileDetailsNumber}>545</Text>
              <Text style={styles.profileDetailsHeading}>Following</Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.name}>Jaydevsinh Zankat</Text>
          <Text style={styles.bioText}>
            {
              'Quote <<Believe in yourself. >>\nPROFESSION << Engineer ITNU-22 >>\nShows Anime <3'
            }
          </Text>
        </View>

        {/* Common Followers */}
        <View style={styles.commonFollowers}>
          <View style={styles.commonFollowersPicsWrapper}>
            <Image
              style={styles.commonFollowersPic1}
              source={require('../assets/images/profilePage/face.jpeg')}
            />
            <Image
              style={styles.commonFollowersPic2}
              source={require('../assets/images/profilePage/face.jpeg')}
            />
          </View>
          <Text style={styles.commonFollowersName}>
            Followed by{' '}
            <Text style={styles.boldText}>
              _yashkumar.patel, underwaterwale
            </Text>{' '}
            and <Text style={styles.boldText}>35 others</Text>
          </Text>
        </View>

        {/* Buttons */}
        <View
          style={
            isFollowing ? styles.followingBtnWrapper : styles.followBtnWrapper
          }>
          <TouchableOpacity
            style={isFollowing ? styles.followingBtn : styles.followBtn}
            onPress={handlePressed}>
            <Text
              style={isFollowing ? styles.followingText : styles.followText}>
              {isFollowing ? 'Following' : 'Follow'}
            </Text>
          </TouchableOpacity>
          {isFollowing ? (
            <>
              <View style={{width: 5}} />
              <TouchableOpacity style={styles.followingBtn}>
                <Text style={styles.messagesText}>Message</Text>
              </TouchableOpacity>
              <View style={{width: 5}} />
              <TouchableOpacity style={styles.SuggestionBtn}>
                <AddSuggestion
                  width={20}
                  height={20}
                  strokeWidth={25}
                  // fill={'#000'}
                />
              </TouchableOpacity>
            </>
          ) : null}
        </View>

        {/* Highlights */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.highlightsWrapper}>
            <Highlight />
            <Highlight />
            <Highlight />
            <Highlight />
            <Highlight />
            <Highlight />
            <Highlight />
            <Highlight />
          </View>
        </ScrollView>

        {/* Header icons for Post */}
        <>
          <View style={styles.postHeaderWrapper}>
            <View style={[styles.headerIconWrapper, {borderBottomWidth: 1}]}>
              <Grid width={33} height={33} strokeWidth={33} />
            </View>
            <View style={styles.headerIconWrapper}>
              <PostHeaderIcon
                width={30}
                height={30}
                strokeWidth={5}
                stroke={colors.darkgray}
              />
            </View>
          </View>
        </>

        <PostGrid />
      </ScrollView>

      {/* <View style={{height: 730}} /> */}
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'whitesmoke',
    // bottom: 40,
    paddingBottom: 55,
  },

  // Header
  header: {
    padding: 15,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },

  headerLeftWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
    paddingLeft: 15,
  },

  // Profile Section
  profileSection: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    paddingLeft: 20,
    paddingBottom: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: colors.secodary,
  },

  profilePicWrapper: {
    // width: 40,
    // height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },

  // Profile Details
  profileDetails: {
    flexDirection: 'row',
  },

  profileDetailsColumn: {
    alignItems: 'center',
    paddingLeft: 20,
  },

  profileDetailsNumber: {
    fontWeight: '800',
    fontSize: 18,
    color: colors.black,
  },
  profileDetailsHeading: {
    fontSize: 14,
    color: colors.black,
    fontWeight: '400',
  },

  // Description
  descriptionContainer: {
    paddingLeft: 15,
  },
  name: {
    fontWeight: '500',
    color: colors.black,
    fontSize: 14,
  },
  bioText: {
    color: colors.black,
    fontSize: 14,
  },

  // Common Followers
  commonFollowers: {
    padding: 15,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  commonFollowersPicsWrapper: {
    width: 50,
  },

  commonFollowersPic1: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.secodary,
  },
  commonFollowersPic2: {
    width: 30,
    height: 30,
    borderRadius: 50,
    position: 'absolute',
    left: 15,
    borderWidth: 1,
    borderColor: colors.secodary,
  },

  commonFollowersName: {
    color: colors.black,
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 12,
  },

  boldText: {
    fontWeight: '700',
  },

  // Follow Buttons

  followBtnWrapper: {
    padding: 15,
    paddingTop: 0,
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },

  followingBtnWrapper: {
    padding: 15,
    paddingTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  followBtn: {
    backgroundColor: colors.primary,
    padding: 6,
    alignItems: 'center',
    borderRadius: 8,
  },

  followingBtn: {
    backgroundColor: colors.gray1,
    padding: 6,
    alignItems: 'center',
    borderRadius: 5,
    flex: 40,
    // paddingRight: 10,
  },

  SuggestionBtn: {
    backgroundColor: colors.gray1,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // alignContent: 'center',
    borderRadius: 5,
    flex: 7,
  },

  followText: {
    color: colors.secodary,
    fontWeight: '600',
  },

  followingText: {
    color: colors.green,
    fontWeight: '500',
  },

  messagesText: {
    color: colors.black,
    fontWeight: '500',
  },

  // Highlights Wrapper
  highlightsWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 15,
  },

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

  postHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },

  headerIconWrapper: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomColor: colors.darkgray,
  },

  // Post
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
