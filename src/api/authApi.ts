import axios from "axios";


const BASE_URL = 'https://collegegram-greedy-test.darkube.app';

export const authApi = axios.create({
  baseURL: BASE_URL,

});
// type Inputs = {
//   authenticator: string;
//   password: string;
// };

type InputSignUp = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

authApi.defaults.headers.common["Content-Type"] = "application/json";

export module AuthAPI {
  export const signup = async (user: InputSignUp) => {
    const response = await authApi.post("user/register", user);
    console.log(response);
    return response.data;
  };
// type Token = {
//   token: string
// };
authApi.defaults.headers.common['Content-Type'] = 'application/json';

  export const login = async (authenticator: string, password: string) => {
    const user = { authenticator, password };
    const response = await authApi.post("user/login", user);
    return response.data;
  };

  export const verifyEmailFn = async (verificationCode: string) => {
    const response = await authApi.get(`auth/verifyemail/${verificationCode}`);
    return response.data;
  };

  export const logoutUserFn = async () => {
    const response = await authApi.get("auth/logout");
    return response.data;
  };
}
export const verifyToken = async (token: string) => {
  const response = await authApi.post('user/verifyToken', {
    token,
  });
  console.log(response)
  return response.status;
};
