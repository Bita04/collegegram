import axios from "axios";


const BASE_URL = 'https://collegegram-greedy-test.darkube.app';

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

export const getPosts = async (limit:number, nextOffset:string, first: boolean ) => {
  if(first) {
    const response = await appApi.get(`/post/user?limit=${limit}`, {
      headers: {
        
        "authorization": localStorage.getItem("accessToken"),
        "refresh-token" : localStorage.getItem("refreshToken")



    

      }
    });
    return response.data;
    

  }
  else{
    const response = await appApi.post(`/post/user?limit=${limit}&startTime=${nextOffset}`);
    return response.data;

  }
    
  };

  export const getHomePosts = async (limit: number) => {
    
      const response = await appApi.get(`/post/home?limit=${limit}`,{
        headers: {
          
          "authorization": localStorage.getItem("accessToken"),
          "refresh-token" : localStorage.getItem("refreshToken")
  
  
      
  
        }
      });
      // console.log(response.data)
      return response.data;
      
  
    

      
    };