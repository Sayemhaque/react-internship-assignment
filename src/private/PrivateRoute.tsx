import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
    children: ReactNode;
  }

const PrivateRoute:React.FC<PrivateRouteProps> = ({children}) => {
    const location = useLocation()
    const user = localStorage.getItem("userData")
    if(user){
     return children;   
    }
    return  <Navigate to="/" state={{from:location}} replace={true}></Navigate>
};

export default PrivateRoute;