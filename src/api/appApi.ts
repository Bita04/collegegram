import axios from "axios";


const BASE_URL = 'https://collegegram-greedy-test.darkube.app';

export const appApi = axios.create({
  baseURL: BASE_URL,
  headers : {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
    'refreshToken': localStorage.getItem('refreshToken'),
  }

});

// export const getPosts = async (limit, nextOffset) => {
//     const response = await appApi.get(`/post/user/1?limit=${limit}&offset=${nextOffset}`);
//     return response.data;
//   };