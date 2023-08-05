
import { isLogged } from "./authHandler";
import { Navigate, Route } from "react-router-dom";
import { ReactNode } from "react";

interface ChildrenProps {
    children: ReactNode
}
  
export const ProtectedRoute = ( { children, ...rest }: ChildrenProps ) => {
    let logged = isLogged();

    if (!logged) {
        return <Navigate to={"/Signin"} replace />;
    } else {
        return children;
    }
}
  