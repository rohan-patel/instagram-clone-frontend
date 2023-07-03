import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../config/colors';
import Back from '../../assets/svg/back';
import {FloatingTextInputForm} from '../../components/FloatingTextInputForm';

const Name = () => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableHighlight style={styles.back}>
          <Back width="18" height="18" strokeWidth="6" stroke="#000" />
        </TouchableHighlight>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>What's your name?</Text>
        </View>
        <View style={styles.inputWrapper}>
          <FloatingTextInputForm
            attrName="name"
            title="Full Name"
            value={name}
            updateMasterState={setName}
            titleInActiveSize={15}
            textInputStyles={{
              // here you can add additional TextInput styles
              color: 'black',
              fontSize: 18,
            }}
            otherTextInputProps={
              {
                // here you can add other TextInput props of your choice
                // maxLength: 12,
              }
            }
          />
        </View>
        <TouchableHighlight style={styles.nextWrapper}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight style={styles.loginTextWrapper}>
        <Text style={styles.loginText}>Already have an account?</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Name;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  },

  main: {},

  back: {
    padding: 20,
    paddingTop: 30,
  },

  headingWrapper: {
    padding: 20,
    paddingTop: 0,
    paddingBottom: 5,
  },

  heading: {
    fontSize: 25,
    fontFamily: 'InstagramSans-Bold',
    lineHeight: 30,
    color: colors.black,
  },

  inputWrapper: {
    padding: 20,
    paddingTop: 20,
    paddingBottom: 0,
  },

  nextWrapper: {
    margin: 20,
    marginTop: 10,
    marginBottom: 5,
    padding: 12,
    borderColor: colors.primary,
    borderWidth: 1,
    backgroundColor: colors.primary,
    borderRadius: 50,
    alignItems: 'center',
  },

  nextText: {
    fontSize: 16,
    fontFamily: 'InstagramSans-Medium',
    color: colors.secodary,
  },

  emailWrapper: {
    margin: 20,
    marginTop: 5,
    padding: 12,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
  },

  emailText: {
    fontSize: 16,
    color: colors.black,
    fontFamily: 'InstagramSans-Medium',
  },

  loginTextWrapper: {
    alignItems: 'center',
    padding: 20,
  },

  loginText: {
    color: colors.primary,
  },
});
