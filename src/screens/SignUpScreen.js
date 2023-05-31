import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config/colors';
import PhoneInputForm from '../components/PhoneInputForm';
import PrimaryButton from '../components/PrimaryButton';

export class SignUpScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPhoneEnabled: true,
    };
  }

  switchButton(val) {
    this.setState({isPhoneEnabled: val});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              style={styles.avatar}
              source={require('../assets/images/avatar.jpg')}
            />
          </View>

          <View style={styles.switchTitleWrapper}>
            <TouchableOpacity
              onPress={() => this.switchButton(true)}
              style={[
                styles.titleSwitch,
                this.state.isPhoneEnabled
                  ? {borderBottomColor: colors.black}
                  : {borderBottomColor: colors.gray},
              ]}>
              <Text
                style={[
                  styles.title,
                  {
                    color: this.state.isPhoneEnabled
                      ? colors.black
                      : colors.gray,
                  },
                ]}>
                PHONE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.switchButton(false)}
              style={[
                styles.titleSwitch,
                this.state.isPhoneEnabled
                  ? {borderBottomColor: colors.gray}
                  : {borderBottomColor: colors.black},
              ]}>
              <Text
                style={[
                  styles.title,
                  {
                    color: this.state.isPhoneEnabled
                      ? colors.gray
                      : colors.black,
                  },
                ]}>
                EMAIL
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.phoneNumberInputWrapper}>
            <PhoneInputForm />
          </View>

          <View style={styles.notificationWrapper}>
            <Text style={styles.notificationText}>
              You may receiver SMS notifications from us for security and login
              purposes.
            </Text>
          </View>

          <View style={styles.buttonWrapper}>
            <PrimaryButton
              buttonBgColor={colors.primary}
              labelColor={colors.secodary}
              buttonLabel={'Next'}
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

export default SignUpScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },

  topContainer: {
    display: 'flex',
    flex: 1,
  },

  bottomContainer: {
    borderTopWidth: 0.5,
    borderColor: colors.gray1,
    padding: 15,
  },

  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20%',
  },

  avatar: {
    width: 200,
    height: 200,
  },

  switchTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    margin: 30,
    marginTop: 30,
  },

  titleSwitch: {
    display: 'flex',
    flex: 1,
    borderBottomWidth: 1,
  },

  title: {
    textAlign: 'center',
    padding: 15,
    fontWeight: '700',
  },

  phoneNumberInputWrapper: {
    display: 'flex',
    margin: 30,
  },

  notificationWrapper: {
    padding: 30,
    paddingTop: 10,
  },

  notificationText: {
    color: colors.gray,
    textAlign: 'center',
  },

  buttonWrapper: {
    marginLeft: 15,
    marginRight: 15,
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
