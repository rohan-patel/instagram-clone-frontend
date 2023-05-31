import {Text, View, StyleSheet, TextInput} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../config/colors';

export class SeacrhBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  textChanged = text => {
    this.setState({searchText: text});
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.iconWrapper}>
            <Icon
              style={styles.icon}
              name="search"
              size={22}
              color={colors.gray}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder={'Search'}
              onChangeText={text => this.textChanged(text)}
              style={styles.inputBox}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default SeacrhBox;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },

  iconWrapper: {
    display: 'flex',
    flex: 1,
  },

  icon: {
    padding: 5,
  },

  inputWrapper: {
    display: 'flex',
    flex: 7,
  },

  inputBox: {
    height: 40,
  },
});
