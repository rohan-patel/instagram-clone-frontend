import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import {colors} from '../config/colors';
import {useNavigation} from '@react-navigation/native';

const SearchUser = ({username, name, additionalInfo}) => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      underlayColor={colors.gray}
      onPress={() => navigation.navigate('SearchedProfile')}>
      <View style={styles.container}>
        <View style={styles.dpWrapper}>
          <Image
            style={styles.dp}
            source={require('../assets/images/face.jpeg')}
          />
        </View>
        <View style={styles.info}>
          {/* <View style={styles.username}> */}
          <Text
            style={[styles.infoText, {color: colors.black, fontWeight: '500'}]}>
            {username}
          </Text>
          {/* </View> */}
          {/* <View style={styles.name}> */}
          <Text style={styles.infoText}>{name}</Text>
          {/* </View> */}
          {/* <View style={styles.additionalInfo}> */}
          <Text style={styles.infoText}>{additionalInfo}</Text>
          {/* </View> */}
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default SearchUser;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 5,
    backgroundColor: colors.secodary,
  },
  dpWrapper: {
    padding: 0,
    paddingLeft: 10,
    paddingRight: 25,
    justifyContent: 'center',
  },
  dp: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  info: {
    justifyContent: 'space-between',
  },
  username: {},
  name: {},
  additionalInfo: {},
  infoText: {
    color: colors.darkgray,
    fontSize: 13,
  },
});
