import axios from "axios";

const BASE_URL = "https://collegegramgreedy.darkube.app";

export const appApi = axios.create({
  baseURL: BASE_URL,
});
// axios.get("https://collegegram-greedy-test.darkube.app/post", formData, {
//   headers: {
//     'content-type': 'multipart/form-data',
//     "authorization": localStorage.getItem("accessToken"),
//     "refresh-token" : localStorage.getItem("refreshToken")

//   }
// }).then((res) => {

//   console.log(res);
// })

export const getPosts = async (
  limit: number,
  nextOffset: number,
  first: boolean
) => {
  if (first) {
    const response = await appApi.get(`/post/user?limit=${limit}`, {
      headers: {
        authorization: localStorage.getItem("accessToken"),
        "refresh-token": localStorage.getItem("refreshToken"),
      },
    });
    return response.data;
  } else {
    const response = await appApi.post(
      `/post/user?limit=${limit}&startTime=${new Date(nextOffset).getTime()}`
    );
    return response.data;
  }

  // console.log(new Date(nextOffset).getTime())
  // if(nextOffset === '0') {
  //   const response = await appApi.get(`/post/user?limit=${limit}`, {
  //     headers: {

  //       "authorization": localStorage.getItem("accessToken"),
  //       "refresh-token" : localStorage.getItem("refreshToken")

  //     }
  //   });
  //   return response.data;

  // }
  // else{

  // }
};

export const getByUserName = async (username: string) => {
  // console.log(username)
  const response = await appApi.get(`/user/getUserProfile/${username}`, {
    headers: {
      authorization: localStorage.getItem("accessToken"),
      "refresh-token": localStorage.getItem("refreshToken"),
    },
  });
  return response.data;
};

export const getInfoUser = async () => {
  const response = await appApi.get("/user/getUser", {
    headers: {
      authorization: localStorage.getItem("accessToken"),
      "refresh-token": localStorage.getItem("refreshToken"),
    },
  });
  return response.data;
};
