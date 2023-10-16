import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/Register";
import { DashBoardPage } from "../pages/Dashboard";
import { useState } from "react";

export const RoutesMain = () => {
    const [userInfo, setUserInfo] = useState({});
    console.log(userInfo)

    return(
        <Routes>
            <Route path="/" element={<LoginPage setUserInfo={setUserInfo}/>}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/dashboard" element={<DashBoardPage userInfo={userInfo}/>}/>
        </Routes>
    )
}