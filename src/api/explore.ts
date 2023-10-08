import ExploreContainer from "../Explore/ExploreContainer";
import { appApi } from "./appApi";

export const getExplore = async (limit : number = 10) => {
    const response = await appApi.get(`/post/explore`, {
      headers:{
        'Authorization':`${localStorage.getItem("accessToken")}`,
        'refresh-token':`${localStorage.getItem("refreshToken")}`,
    },
    params:{
        limit
    }
    });
    return response.data;
    
  };
