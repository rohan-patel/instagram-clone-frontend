import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../config/colors';
import SearchBar from '../components/SearchBar';
import Back from '../assets/svg/back';
import SearchUserResult from '../components/SearchUserResult';
import {ScrollView} from 'react-native-gesture-handler';
// import {} from 'react-native-gesture-handler';

const SearchSecondary = ({navigation}) => {
  const [searchInput, setSearchInput] = useState('');

  // const searchForUser = () => {
  //   console.log('Function called');
  // };

  // useEffect(() => {
  //   console.log(searchInput);
  //   if (searchInput !== '') {
  //     searchForUser();
  //   }
  // }, [searchInput]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.back}>
            <Back width={25} height={25} strokeWidth={4} />
          </View>
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <SearchBar textInputEnabled={true} setSearchInput={setSearchInput} />
        </View>
      </View>
      <View
        style={{
          height: 0.5,
          backgroundColor: colors.darkgray,
        }}
      />
      <View style={styles.users}>
        <ScrollView>
          <SearchUserResult input={searchInput} />
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchSecondary;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: colors.secodary,

    flex: 1,
    // padding: 30,
    // paddingLeft: 0,
    // paddingTop: 0,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },

  back: {
    paddingRight: 15,
    paddingLeft: 10,
  },

  searchBar: {
    flex: 5,
  },

  users: {
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
  },
});
