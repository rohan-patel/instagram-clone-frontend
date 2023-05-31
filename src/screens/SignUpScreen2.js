import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import PrimaryInputForm from '../components/PrimaryInputForm';
import PrimaryButton from '../components/PrimaryButton';
import {colors} from '../config/colors';

export class SignUpScreen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>ENTER THE CONFIRMATION CODE</Text>
          </View>
          <View style={styles.subHeadingContainer}>
            <Text style={styles.infoText}>
              Enter the 6 digit code we sent to +91 7228815397.{' '}
              <Text style={styles.requestText}>Request a new one?</Text>
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <PrimaryInputForm placeholderText="Confirmation Code" />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              buttonLabel="Next"
              labelColor={colors.secodary}
              buttonBgColor={colors.primary}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.login}>
            <Text style={styles.alreadyAccount}>Already have an account?</Text>{' '}
            <Text style={styles.logIn}>LogIn</Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default SignUpScreen2;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },

  headingContainer: {
    marginTop: '20%',
    marginBottom: 20,
  },

  subHeadingContainer: {
    marginLeft: '20%',
    marginRight: '20%',
    marginBottom: 15,
  },

  inputContainer: {
    marginLeft: '10%',
    marginRight: '10%',
  },

  buttonContainer: {
    marginLeft: '5%',
    marginRight: '5%',
  },

  topContainer: {
    display: 'flex',
    flex: 1,
  },

  bottomContainer: {
    borderTopWidth: 1,
    borderColor: colors.gray1,
    padding: 15,
  },

  heading: {
    textAlign: 'center',
    fontWeight: '700',
  },

  infoText: {
    color: colors.gray,
  },

  requestText: {
    color: colors.primary,
    fontWeight: '700',
  },

  login: {
    textAlign: 'center',
  },

  alreadyAccount: {
    color: colors.gray,
  },

  logIn: {
    fontWeight: '700',
  },
});
