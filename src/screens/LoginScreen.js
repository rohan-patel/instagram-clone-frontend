import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import InstaLogo from '../assets/svg/instaLogoSmall';
import LeftArrow from '../assets/svg/leftArrow';
import {FloatingTextInputForm} from '../components/FloatingTextInputForm';
import {colors} from '../config/colors';
import MetaLogo from '../assets/svg/metaLogo';
import {loginUser} from '../functions/auth';
import UserInfoSecuredDBGateway from '../storage/userInfo';
import {setSignIn} from '../redux-store/slices/authSlice';
import {useDispatch} from 'react-redux';

const LoginScreen = ({navigation}) => {
  const [principal, setPrincipal] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const initialLoginCheck = async () => {
    const userInfo = await UserInfoSecuredDBGateway.load();
    if (userInfo) {
      // console.log(userInfo);
      const signInDetails = {
        email: userInfo.email,
        phone: userInfo.phone,
        token: userInfo.token,
        userId: userInfo.userId,
        username: userInfo.usernname,
        isLoggedIn: true,
      };
      dispatch(setSignIn(signInDetails));
    }
  };

  useEffect(() => {
    initialLoginCheck();
  }, []);

  const handleLogin = async () => {
    const userInfo = await loginUser({principal, password});
    if (userInfo !== false) {
      const signInDetails = {
        email: userInfo.email,
        phone: userInfo.phone,
        token: userInfo.token,
        userId: userInfo.userId,
        username: userInfo.usernname,
        isLoggedIn: true,
      };
      dispatch(setSignIn(signInDetails));
    }
  };

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'flex-start'}}>
        <View style={styles.headerWrapper}>
          <LeftArrow width={30} height={30} stroke={'#000'} />
        </View>
        <View style={styles.languagePicker}>
          <Text style={{color: colors.black}}>English (US)</Text>
        </View>
        <View style={styles.logoWrapper}>
          <InstaLogo width={72} height={72} />
        </View>
      </View>

      <View style={styles.inputWrapper}>
        <FloatingTextInputForm
          attrName="principal"
          title="Username, email or mobile number"
          value={principal}
          updateMasterState={setPrincipal}
          titleInActiveSize={16}
          textInputStyles={{
            // here you can add additional TextInput styles
            color: 'green',
            fontSize: 18,
            // numberOfLines: 1,
          }}
          otherTextInputProps={
            {
              // here you can add other TextInput props of your choice
              // maxLength: 12,
            }
          }
        />
        <FloatingTextInputForm
          attrName="password"
          title="Password"
          value={password}
          updateMasterState={setPassword}
          titleInActiveSize={16}
          textInputStyles={{
            // here you can add additional TextInput styles
            color: 'green',
            fontSize: 18,
          }}
          otherTextInputProps={
            {
              // here you can add other TextInput props of your choice
              // maxLength: 12,
            }
          }
        />
        <TouchableOpacity style={styles.buttonWrapper} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems: 'center', padding: 10}}>
          <Text style={{color: colors.black, fontSize: 14, fontWeight: '400'}}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerWrapper}>
        <TouchableOpacity>
          <View style={styles.createAccBtnWrapper}>
            <Text style={styles.createAccText}>Create Account</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.metaLogoWrapper}>
          <MetaLogo width={100} height={50} />
        </View>
      </View>

      {/* <Text>LoginScreen</Text> */}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
  },

  headerWrapper: {
    padding: 10,
    paddingLeft: 20,
  },

  languagePicker: {
    alignItems: 'center',
    padding: 20,
  },

  logoWrapper: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },

  inputWrapper: {
    padding: 20,
    paddingTop: 0,
    justifyContent: 'center',
  },

  buttonWrapper: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
  },

  buttonText: {
    fontSize: 16,
    // fontWeight: '700',
    fontFamily: 'Avenir-Medium',
    color: colors.secodary,
  },

  footerWrapper: {
    display: 'flex',
    // flex: 1,
    padding: 20,
    paddingBottom: 0,
    justifyContent: 'flex-end',
  },

  createAccBtnWrapper: {
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 50,
    alignItems: 'center',
    padding: 10,
  },

  createAccText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '500',
  },

  metaLogoWrapper: {
    alignItems: 'center',
  },
});
