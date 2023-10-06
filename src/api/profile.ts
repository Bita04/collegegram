import { FormValues } from "../components/EditProfile/EditProfile";
import { appApi } from "./appApi";



export const getProfile = async () => {
    const response = await appApi.get(`/user/getUser`, {
      headers:{
        'Authorization':`${localStorage.getItem("accessToken")}`,
        'refresh-token':`${localStorage.getItem("refreshToken")}`,
    }
    });
    return response.data;
  };


export const setProfile = async (values:FormValues) => {

        const formData = new FormData()

    formData.append('bio', values['bio'])
    formData.append('isPrivate', new Boolean(values['isPrivate']).toString())
    formData.append('password', values['password'])
    formData.append('confirmPassword', values['confrimPassword'])
    formData.append('email', values['email'])
    formData.append('lastName', values['lastName'])
    formData.append('firstName', values['firstName'])
    formData.append('avatar', values['avatar'])



    const response = await appApi.put(`/user/editProfile`, formData,{

        headers:{
            'Authorization':`${localStorage.getItem("accessToken")}`,
            'refresh-token':`${localStorage.getItem("refreshToken")}`,
        }
    } ); 
    console.log(response.data)
    return response.data;
  };  




  export const getOthersProfile = async () => {
      console.log("hello")
      const response = await appApi.post(`/user/getUserProfile`, {userName:""} ,{
      
      headers:{
        'Authorization':`${localStorage.getItem("accessToken")}`,
        'refresh-token':`${localStorage.getItem("refreshToken")}`,
    }
    });
    console.log("byyyyyyyyyyy")
    return response.data;
  };



    // profilePhoto.forEach((photo) => formData.append("Avatar", photo));
