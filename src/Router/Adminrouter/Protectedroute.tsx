import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRoutesProps {
   isLogged: boolean;
 }
 
const ProtectedRoute:React.FC<ProtectedRoutesProps>=({isLogged})=>{

   return isLogged ? <Outlet/> : <Navigate to="adminlogin" replace={true} />
}

export default ProtectedRoute