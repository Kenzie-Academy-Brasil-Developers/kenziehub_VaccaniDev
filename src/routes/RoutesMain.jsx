import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../pages/Register";
import { DashBoardPage } from "../pages/Dashboard";
import { useState } from "react";
import { LoginPage } from "../pages/Login";

export const RoutesMain = () => {
    const [userInfo, setUserInfo] = useState({});

    return (
        <Routes>
            <Route path="/" element={<LoginPage setUserInfo={setUserInfo} />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashBoardPage userInfo={userInfo} />} />
        </Routes>
    )
}