import { Link, Navigate } from "react-router-dom";
import { verifyToken } from "../../api/authApi";
import React, { useEffect } from "react";
import Login from "../../pages/Login";
export const PrivateRoute =  ({  children } : {

    
    
  
    children: React.ReactNode;
}) => {

    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(()=>{
        console.log("in effect");
        
        setIsLoading(true);
        verifyToken(localStorage.getItem("accessToken")!).then((res) => {
            if(res === 200) {
                console.log("success");
    
               setIsAuthenticated(true);             
            }
            else {
                console.log("error")
                setIsAuthenticated(false);
            }
            console.log(`loading getting false`)
            setIsLoading(false);
        }).catch((err) => {
            setIsLoading(false);
            
        });
        
    }, []);
    if (isLoading)
        return <p>Loading ...</p>
    return isAuthenticated ? children : <Navigate to='/login'/>;
  };
  