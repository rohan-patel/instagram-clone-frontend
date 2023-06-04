import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Search from '../assets/svg/search';
import {colors} from '../config/colors';
import PostGrid from './PostGrid';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <Search width={20} height={20} strokeWidth={0.15} />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder={'Search'}
          placeholderTextColor={colors.darkgray}
          onChangeText={text => setSearchInput(text)}
          style={styles.inputBox}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.gray1,
    padding: 10,
    borderRadius: 5,
  },

  iconWrapper: {
    display: 'flex',
    flex: 1,
  },

  inputWrapper: {
    display: 'flex',
    flex: 7,
  },

  inputBox: {
    height: 20,
    fontSize: 15,
    padding: 0,
    margin: 0,
    color: colors.black,
  },

  gridWrapper: {},
});
