import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ auth, children } : {
    auth: {
        isAuthenticated: boolean;
        
    },
    children: React.ReactNode;
}) => {
    
    const { isAuthenticated }= auth;
    return isAuthenticated ? children : <Navigate to="/login" />;
  };
  