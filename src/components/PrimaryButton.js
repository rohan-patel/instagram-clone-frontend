import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config/colors';

export class PrimaryButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {buttonLabel, buttonBgColor, labelColor} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: buttonBgColor}]}>
          <Text style={[styles.text, , {color: labelColor}]}>
            {buttonLabel}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PrimaryButton;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
  },

  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 5,
  },

  text: {
    textAlign: 'center',
    color: colors.secodary,
    fontSize: 16,
  },
});
