import {login} from '../api/api';
import UserInfoSecuredDBGateway from '../storage/userInfo';
import jwt_decode from 'jwt-decode';

export const loginUser = async userDetails => {
  const response = await login(userDetails);

  console.log(response);

  if (response.error) {
    console.log('error');
    return false;
  } else {
    const jwt = response.headers.authorization;
    const jwtPayload = jwt_decode(jwt);
    const userInfo = {
      userId: jwtPayload.userId,
      username: jwtPayload.username,
      email: jwtPayload.email,
      phone: jwtPayload.phone,
      token: jwt,
    };

    UserInfoSecuredDBGateway.save(userInfo);

    console.log('Logged in successfully and stored details');
    return userInfo;

    // console.log(UserInfoSecuredDBGateway.load());
  }
};

export const logout = async () => {
  UserInfoSecuredDBGateway.delete();
};
