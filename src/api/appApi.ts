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

export const getPosts = async (limit:number, nextOffset:string, first: boolean ) => {
  if(first) {
    const response =  await appApi.get(`/post/user?limit=${limit}`, {
      headers: {
        
        "authorization": localStorage.getItem("accessToken"),
        "refresh-token" : localStorage.getItem("refreshToken")



    

      }
    });
    return response.data;
    

  }
  else{
    const response = await appApi.get(`/post/user?limit=${limit}&startTime=${nextOffset ?? new Date}`, {
      headers: {
        
        "authorization": localStorage.getItem("accessToken"),
        "refresh-token" : localStorage.getItem("refreshToken")



    

      }
    } );
    return response.data;

  }
    
  };

  export const getHomePosts = async (limit:number, nextOffset:string, first: boolean ) => {
    if(first) {
      const response =  await appApi.get(`/post/home?limit=${limit}`, {
        headers: {
          
          "authorization": localStorage.getItem("accessToken"),
          "refresh-token" : localStorage.getItem("refreshToken")
  
  
  
      
  
        }
      });
      return response.data;
      
  
    }
    else{
      const response = await appApi.get(`/post/home?limit=${limit}&startTime=${nextOffset}`, {
        headers: {
          
          "authorization": localStorage.getItem("accessToken"),
          "refresh-token" : localStorage.getItem("refreshToken")
  
  
  
      
  
        }
      } );
      return response.data;
  
    }
      
    };


    export const getPost = async (id: number ) => {
    
      const response = await appApi.get(`/post/${id}`,{
        headers: {
          
          "authorization": localStorage.getItem("accessToken"),
          "refresh-token" : localStorage.getItem("refreshToken")
  
  
      
  
        }
      });
      // console.log(response.data)
      return response.data;
      
  
    

      
    };


    export const getComments = async (postId:number,limit:number, nextOffset:string, first: boolean ) => {
      if(first) {
        const response =  await appApi.get(`/post/${postId}/comments?limit=${limit}`, {
          headers: {
            
            "authorization": localStorage.getItem("accessToken"),
            "refresh-token" : localStorage.getItem("refreshToken")
    
    
    
        
    
          }
        });
        return response.data;
        
    
      }
      else{
        const response = await appApi.get(`/post/${postId}/comments?limit=${limit}&startTime=${nextOffset ?? new Date}`, {
          headers: {
            
            "authorization": localStorage.getItem("accessToken"),
            "refresh-token" : localStorage.getItem("refreshToken")
    
    
    
        
    
          }
        } );
        return response.data;
    
      }
        
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
      export const getByUserNamePosts = async (username:string ,limit:number, nextOffset:string, first: boolean ) => {
        if(first) {
          const response =  await appApi.get(`/post/user/${username}?limit=${limit}`, {
            headers: {
              
              "authorization": localStorage.getItem("accessToken"),
              "refresh-token" : localStorage.getItem("refreshToken")
      
      
      
          
      
            }
          });
          return response.data;
          
      
        }
        else{
          const response = await appApi.get(`/post/user?limit=${limit}&startTime=${nextOffset}`, {
            headers: {
              
              "authorization": localStorage.getItem("accessToken"),
              "refresh-token" : localStorage.getItem("refreshToken")
      
      
      
          
      
            }
          } );
          return response.data;
      
        }
          
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


      export const addComment = async (postId: number, comment:string ) => {
    
        const response = await appApi.post(`/post/${postId}/comment`,{content: comment},{
          headers: {
            
            "authorization": localStorage.getItem("accessToken"),
            "refresh-token" : localStorage.getItem("refreshToken")
    
    
        
    
          }
        });
        // console.log(response.data)
        return response.data;
        
    
      
  
        
      };

      export const addBookmark = async (id:number) => {
        const response = await appApi.post("/post/bookmark",{
          id: id
        } ,{
          headers: {
            authorization: localStorage.getItem("accessToken"),
            "refresh-token": localStorage.getItem("refreshToken"),
          },
        });
        return response.data;
      };

      export const addLike = async (id:number) => {
        const response = await appApi.post("/post/like",{
          id: id
        } ,{
          headers: {
            authorization: localStorage.getItem("accessToken"),
            "refresh-token": localStorage.getItem("refreshToken"),
          },
        });
        return response.data;
      };