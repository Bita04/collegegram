import { appApi } from "./appApi";

export const blockApi = async (userName: string) => {
    const response = await appApi.post(`/user/block`,{userName},{
      headers:{
        'Authorization':`${localStorage.getItem("accessToken")}`,
        'refresh-token':`${localStorage.getItem("refreshToken")}`,
    }
    });
    return response.data;
  };
 