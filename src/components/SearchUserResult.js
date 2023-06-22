import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../config/colors';
import SearchUser from './SearchUser';
import search from '../data/searchData';
import bigData from '../data/bigSearchData';
import {searchUser} from '../api/api';
import SearchSkeletonLoader from './SearchSkeletonLoader';
import SearchSkeleton from './SearchSkeleton';

const SearchUserResult = ({input}) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);

  useEffect(() => {
    const fetchUsers = async query => {
      setIsLoadingUsers(true);
      const result = await searchUser(query);
      console.log(result);
      setSearchResults(result.data);
      setIsLoadingUsers(false);
    };
    if (input === '') {
      setSearchResults([]);
      setIsLoadingUsers(false);
    }
    if (input !== '') {
      fetchUsers(input);
    }
    // console.log(searchResults);
  }, [input]);

  return (
    <View style={styles.container}>
      {isLoadingUsers ? (
        <SearchSkeleton count={10} />
      ) : (
        searchResults.map(user => (
          <SearchUser
            key={user.id}
            username={user.username}
            name={user.name}
            additionalInfo={user.additionalInfo}
          />
        ))
      )}

      {/* <SearchUser />
      <SearchUser />
      <SearchUser /> */}
    </View>
  );
};

export default SearchUserResult;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
});
