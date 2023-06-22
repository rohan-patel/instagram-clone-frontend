import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SearchSkeletonLoader = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        flexDirection="row"
        paddingStart={20}
        marginBottom={10}>
        <SkeletonPlaceholder.Item width={55} height={55} borderRadius={50} />
        <SkeletonPlaceholder.Item marginLeft={15} justifyContent="center">
          <SkeletonPlaceholder.Item width={150} height={10} borderRadius={50} />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={120}
            height={10}
            borderRadius={50}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SearchSkeletonLoader;
