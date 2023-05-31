import {Text, TextInput, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config/colors';

export class PrimaryInputForm extends Component {
  render() {
    const {placeholderText} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput placeholder={placeholderText} />
        </View>
      </View>
    );
  }
}

export default PrimaryInputForm;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },

  inputContainer: {
    backgroundColor: colors.gray1,
    borderWidth: 0.5,
    borderColor: colors.gray,
    borderRadius: 5,
  },
});
