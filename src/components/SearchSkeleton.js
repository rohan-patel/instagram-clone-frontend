import {View, Text} from 'react-native';
import React from 'react';
import SearchSkeletonLoader from './SearchSkeletonLoader';

const SearchSkeleton = ({count}) => {
  var loaders = [];
  for (let index = 0; index < count; index++) {
    loaders.push(<SearchSkeletonLoader key={index} />);
  }
  return loaders;
};

export default SearchSkeleton;
