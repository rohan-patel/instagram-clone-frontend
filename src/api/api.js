import axios from 'axios';
import {selectToken} from '../redux-store/slices/authSlice';
import {useSelector} from 'react-redux';
import {store} from '../redux-store/store';

const apiClient = axios.create({
  baseURL: 'http://192.168.171.165:8082',
  timeout: 30000,
});

apiClient.interceptors.request.use(
  config => {
    if (config.url !== '/auth/login') {
      // const token = fetchToken();
      const state = store.getState();
      const token = state.userAuth.token;
      // console.log(token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  err => Promise.reject(err),
);

export const login = async data => {
  console.log(data);
  try {
    return await apiClient.post('/auth/login', data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const searchUser = async query => {
  // console.log(query);
  try {
    return await apiClient.get(`/users/search?query=${query}`);
  } catch (exception) {
    // console.log(exception);
    return {
      error: true,
      exception,
    };
  }
};
