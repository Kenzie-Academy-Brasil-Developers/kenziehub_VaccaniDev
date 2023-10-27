import { Outlet, Navigate } from "react-router-dom";
import { KenzieContext } from "../../providers/Context";
import { useContext } from "react";

export const ProtectedRoutes = () => {
    const {user} = useContext(KenzieContext);

    return user ? <Outlet /> : <Navigate to="/" />
}