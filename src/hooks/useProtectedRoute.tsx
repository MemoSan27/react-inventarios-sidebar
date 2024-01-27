import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom"

interface ProtectedRouteProps {
    user: any; 
    redirectTo: string;
    children?: ReactNode;
  }

export const ProtectedRoute = ({user, redirectTo, children}: ProtectedRouteProps) =>{
    if(user===null) return <Navigate replace to={redirectTo} />

    return children ? children : <Outlet />;
}