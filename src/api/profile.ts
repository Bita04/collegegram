import { ProfileFormValues } from "../components/EditProfile/EditProfile";
import { appApi } from "./appApi";



export const getProfile = async () => {
    const response = await appApi.get(`/user/getUser`);
    return response.data;
  };


export const setProfile = async (values:ProfileFormValues) => {
    console.log("hello")
    console.log(localStorage.getItem("accessToken"))
    console.log(localStorage.getItem('refreshToken'))
    const response = await appApi.post(`/user/editProfile`,values, {

        headers:{
            'Authorization':`${localStorage.getItem("accessToken")}`,
            'refresh-token':`${localStorage.getItem("refreshToken")}`,
        }
    });
    console.log("bye")
    return response.data;
  };  