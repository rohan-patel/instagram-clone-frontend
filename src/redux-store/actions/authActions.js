import {login} from '../api/api';
import UserInfoSecuredDBGateway from '../storage/userInfo';
import jwt_decode from 'jwt-decode';

export const authAction = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

export const getActions = dispatch => {
  return {
    loginUser: userDetails => dispatch(loginUser(userDetails)),
    setUserDetails: userDetails => dispatch(setUserDetails(userDetails)),
  };
};

const setUserDetails = userDetails => {
  return {
    type: authAction.SET_USER_DETAILS,
    userDetails,
  };
};

const loginUser = userDetails => {
  console.log(userDetails);
  return async () => {
    console.log('inside return');
    const response = await login(userDetails);

    console.log(response);

    if (response.error) {
      console.log('error');
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

      console.log(UserInfoSecuredDBGateway.load());
    }
  };
};
