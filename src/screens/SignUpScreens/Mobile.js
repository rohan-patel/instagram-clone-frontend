import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {colors} from '../../config/colors';

const Mobile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.back}></View>
        <View style={styles.heading}></View>
        <View style={styles.subheading}></View>
        <View style={styles.inputWrapper}></View>
        <View style={styles.captionWrapper}></View>
        <View style={styles.nextWrapper}></View>
        <View style={styles.emailWrapper}></View>
      </View>
      <TouchableHighlight style={styles.loginTextWrapper}>
        <Text style={styles.loginText}>Already have an account?</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Mobile;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  },

  main: {},

  loginTextWrapper: {
    alignItems: 'center',
    padding: 20,
  },

  loginText: {
    color: colors.primary,
  },
});
