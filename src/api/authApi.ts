import axios from 'axios';
import { UseFormRegister } from 'react-hook-form';


const BASE_URL = 'https://greedy.darkube.app';

export const authApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
type Inputs = {
    authenticator: string,
    password: string,
}

type InputSignUp = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};


authApi.defaults.headers.common['Content-Type'] = 'application/json';

export const signUpUserFn = async (user: InputSignUp) => {
  const response = await authApi.post('user/register', user);
  console.log(response)
  return response.data;
};

export const loginUserFn = async (authenticator: string, password: string) => {
  const user = { authenticator, password };
  const response = await authApi.post('user/login', user);
  return response.data;
};


export const verifyEmailFn = async (verificationCode: string) => {
  const response = await authApi.get(
    `auth/verifyemail/${verificationCode}`
  );
  return response.data;
};


export const logoutUserFn = async () => {
  const response = await authApi.get('auth/logout');
  return response.data;
};

