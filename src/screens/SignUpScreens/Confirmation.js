import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../config/colors';
import Back from '../../assets/svg/back';
import {FloatingTextInputForm} from '../../components/FloatingTextInputForm';

const Confirmation = () => {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <TouchableHighlight style={styles.back}>
          <Back width="18" height="18" strokeWidth="6" stroke="#000" />
        </TouchableHighlight>
        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>Enter the confirmation code</Text>
        </View>
        <View style={styles.subheadingWrapper}>
          <Text style={styles.subheading}>
            To confirm your account, enter the 6-digit code we sent to
            +917228815397
          </Text>
        </View>
        <View style={styles.inputWrapper}>
          <FloatingTextInputForm
            attrName="code"
            title="Confirmation Code"
            value={code}
            updateMasterState={setCode}
            keyboardType="numeric"
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
        {/* <View style={styles.captionWrapper}>
          <Text style={styles.caption}>
            You may receive SMS notifications from us for security and login
            purposes.
          </Text>
        </View> */}
        <TouchableHighlight style={styles.nextWrapper}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.emailWrapper}>
          <Text style={styles.emailText}>I didn't get the code</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight style={styles.loginTextWrapper}>
        <Text style={styles.loginText}>Already have an account?</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Confirmation;

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

  subheadingWrapper: {
    padding: 20,
    paddingTop: 0,
  },

  subheading: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'InstagramSans-Regular',
    color: colors.black,
  },

  inputWrapper: {
    padding: 20,
    paddingTop: 0,
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
