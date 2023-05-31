import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://192.168.14.165:8082',
  timeout: 5000,
});

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
