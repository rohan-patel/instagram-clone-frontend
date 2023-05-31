import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../config/colors';

export class PhoneInputForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.countryWrapper}>
          <Text style={styles.country}>IN +91</Text>
        </View>
        <View style={styles.inputnumber}>
          <TextInput value={'7228815397'} />
        </View>
        <View style={styles.closeBtnWrapper}>
          <Icon
            size={25}
            style={styles.icon}
            name={'times'}
            color={colors.gray}
          />
        </View>
      </View>
    );
  }
}

export default PhoneInputForm;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    borderColor: colors.gray,
    backgroundColor: colors.gray1,
  },

  countryWrapper: {
    display: 'flex',
    borderRightWidth: 1,
    borderRightColor: colors.gray,
    paddingRight: 15,
    paddingLeft: 5,
  },

  country: {
    fontWeight: '700',
    color: colors.gray,
  },

  inputnumber: {
    display: 'flex',
    flex: 1,
    paddingLeft: 15,
  },

  closeBtnWrapper: {
    display: 'flex',
    flex: 1,
    paddingRight: 5,
  },

  icon: {
    textAlign: 'right',
  },
});
