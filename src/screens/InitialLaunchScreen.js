import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import React, {Component, StrictMode} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../config/colors';
import PrimaryButton from '../components/PrimaryButton';
import SeacrhBox from '../components/SeacrhBox';

const DATA = [
  {
    id: '1',
    title: 'Language 1',
    subTitle: '',
  },
  {
    id: '2',
    title: 'Language 2',
    subTitle: 'Language 2',
  },
  {
    id: '3',
    title: 'Language 3',
    subTitle: 'Language 3',
  },
  {
    id: '4',
    title: 'Language 4',
    subTitle: 'Language 4',
  },
  {
    id: '5',
    title: 'Language 5',
    subTitle: 'Language 5',
  },
  {
    id: '6',
    title: 'Language 6',
    subTitle: 'Language 6',
  },
  {
    id: '7',
    title: 'Language 7',
    subTitle: 'Language 7',
  },
];

export class InitialLaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageModelVisible: false,
    };
  }

  handleClick = () => {
    this.setState({
      languageModelVisible: !this.state.languageModelVisible,
    });
  };

  render() {
    const {languageModelVisible} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.languageContainer}>
          <TouchableOpacity
            onPress={() => {
              this.handleClick();
            }}>
            <Text>
              <Text>English (United States) {'  '}</Text>
              <Icon name="angle-down" size={25} color={colors.gray} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer}>
          <Image
            style={styles.instaLogo}
            source={require('../assets/images/instagramLogo.png')}
          />
          <PrimaryButton
            buttonLabel="Create New Account"
            buttonBgColor={colors.primary}
            labelColor={colors.secodary}
          />
          <PrimaryButton
            buttonLabel="Log In"
            buttonBgColor={colors.secodary}
            labelColor={colors.primary}
          />
        </View>
        <View style={styles.fbLogoContainer}>
          <View style={styles.bottomWrapper}>
            <Text style={styles.from}>from</Text>
            <Text style={styles.facebook}>FACEBOOK</Text>
          </View>
        </View>

        <Modal visible={this.state.languageModelVisible} transparent={true}>
          <View
            style={[
              styles.modalContainer,
              languageModelVisible
                ? {backgroundColor: 'rgba(0, 0, 0, 0.5)'}
                : null,
            ]}>
            <View style={styles.modalContentContainer}>
              <View style={styles.titleWrapper}>
                <Text style={styles.title}>SELECT YOUR LANGUAGE</Text>
              </View>
              <View style={styles.underline} />
              <View style={styles.searchBoxWrapper}>
                <SeacrhBox />
              </View>
              <View style={styles.underline} />

              <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <View style={styles.languageWrapper}>
                    <Text style={styles.langTitle}>{item.title}</Text>
                    <Text style={styles.subLanguage}>{item.subTitle}</Text>
                  </View>
                )}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.handleClick();
            }}>
            <Text>Close Modal</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

export default InitialLaunchScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },

  languageContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  buttonsContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fbLogoContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  instaLogo: {
    width: '50%',
    height: '25%',
  },

  bottomWrapper: {
    borderTopColor: colors.gray,
    borderTopWidth: 0.5,
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },

  from: {
    color: colors.gray,
  },

  facebook: {
    fontWeight: 'bold',
  },

  language: {
    color: colors.gray,
  },

  modalContainer: {
    display: 'flex',
    flex: 1,
  },

  modalContentContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.secodary,
    marginLeft: '10%',
    marginRight: '10%',
  },

  titleWrapper: {
    padding: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
  },

  underline: {
    height: 0.5,
    backgroundColor: colors.gray1,
  },

  searchBoxWrapper: {},

  languageWrapper: {
    marginLeft: 15,
    marginBottom: 10,
  },

  subLanguage: {
    color: colors.gray,
    fontSize: 12,
  },

  langTitle: {
    fontSize: 20,
  },
});
