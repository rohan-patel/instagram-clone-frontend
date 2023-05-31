import EncryptedStorage from 'react-native-encrypted-storage';

export interface UserInfo {
  userId: number;
  email?: string;
  phone?: string;
  username: string;
  token: string;
}

const UserInfoSecuredDBGateway = {
  save: async function (userInfo: UserInfo) {
    try {
      await EncryptedStorage.setItem('user-info', JSON.stringify(userInfo));
    } catch (exception) {
      return null;
    }
  },

  load: async function () {
    try {
      const userDetails = await EncryptedStorage.getItem('user-info');
      console.log(userDetails);

      if (userDetails != undefined && userDetails != null) {
        let userInfo = JSON.parse(userDetails);
        return userInfo;
      }
      return null;
    } catch (exception) {
      return null;
    }
  },

  delete: async function () {
    try {
      await EncryptedStorage.removeItem('user-info');
      return true;
    } catch (exception) {
      return false;
    }
  },
};

export default UserInfoSecuredDBGateway;
