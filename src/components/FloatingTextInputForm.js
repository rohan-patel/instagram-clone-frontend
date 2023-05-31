import React, {Component} from 'react';
import {View, Animated, StyleSheet, TextInput, ScrollView} from 'react-native';
import {string, func, object, number} from 'prop-types';

export class FloatingTextInputForm extends Component {
  static propTypes = {
    attrName: string.isRequired,
    title: string.isRequired,
    value: string.isRequired,
    updateMasterState: func.isRequired,
    keyboardType: string,
    titleActiveSize: number, // to control size of title when field is active
    titleInActiveSize: number, // to control size of title when field is inactive
    titleActiveColor: string, // to control color of title when field is active
    titleInactiveColor: string, // to control color of title when field is active
    textInputStyles: object,
    otherTextInputProps: object,
  };

  static defaultProps = {
    keyboardType: 'default',
    titleActiveSize: 11.5,
    titleInActiveSize: 18,
    titleActiveColor: 'black',
    titleInactiveColor: 'dimgrey',
    textInputStyles: {},
    otherTextInputAttributes: {},
  };

  constructor(props) {
    super(props);
    const {value} = this.props;
    this.position = new Animated.Value(value ? 1 : 0);
    this.state = {
      isFieldActive: false,
    };
  }

  _handleFocus = () => {
    if (!this.state.isFieldActive) {
      this.setState({isFieldActive: true});
      Animated.timing(this.position, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  _handleBlur = () => {
    if (this.state.isFieldActive && !this.props.value) {
      this.setState({isFieldActive: false});
      Animated.timing(this.position, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  _onChangeText = updatedValue => {
    const {attrName, updateMasterState} = this.props;
    updateMasterState(updatedValue);
  };

  _returnAnimatedTitleStyles = () => {
    const {isFieldActive} = this.state;
    const {
      titleActiveColor,
      titleInactiveColor,
      titleActiveSize,
      titleInActiveSize,
    } = this.props;

    return {
      top: this.position.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 0],
      }),
      fontSize: isFieldActive ? titleActiveSize : titleInActiveSize,
      color: isFieldActive ? titleActiveColor : titleInactiveColor,
    };
  };

  render() {
    return (
      <View style={Styles.container}>
        <Animated.Text
          style={
            this.state.isFieldActive
              ? [Styles.titleStyles, this._returnAnimatedTitleStyles()]
              : [Styles.titleStylesBlur, this._returnAnimatedTitleStyles()]
          }>
          {this.props.title}
        </Animated.Text>

        <TextInput
          value={this.props.value}
          style={
            this.state.isFieldActive
              ? [Styles.textInput, this.props.textInputStyles]
              : [Styles.textInputBlur, this.props.textInputStyles]
          }
          underlineColorAndroid="transparent"
          onFocus={this._handleFocus}
          onBlur={this._handleBlur}
          onChangeText={this._onChangeText}
          keyboardType={this.props.keyboardType}
          numberOfLines={1}
          {...this.props.otherTextInputProps}
        />
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 0.5,
    marginBottom: 8,
    // paddingTop: 10,
    // paddingBottom: 10,
    // height: 50,
    // marginVertical: 4,
  },
  textInput: {
    fontSize: 15,
    fontFamily: 'Avenir-Medium',
    color: 'black',
    padding: 0,
    // margin: 20,
    marginLeft: 20,
    marginRight: 0,
    marginBottom: 10,
    marginTop: 5,
  },
  textInputBlur: {
    fontSize: 15,
    fontFamily: 'Avenir-Medium',
    color: 'black',
    padding: 0,
    // margin: 5,
    marginLeft: 20,
    marginRight: 0,
    marginTop: 0,
  },
  titleStyles: {
    fontFamily: 'Avenir-Medium',
    margin: 5,
    marginLeft: 20,
    marginRight: 0,
    marginBottom: 0,
  },
  titleStylesBlur: {
    fontFamily: 'Avenir-Medium',
    margin: 5,
    marginLeft: 20,
    marginRight: 0,
    marginBottom: 10,
    marginTop: 10,
  },
});
