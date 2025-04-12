import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../compnents/Home";
import Postsharing from "../compnents/Postsharing";
import BodyMassIndex from "../compnents/BodyMassIndex";
import Usersrendering from "../compnents/Usersrendering";
import Calculator from "../compnents/Calculator";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BodyMassIndex" element={<BodyMassIndex />} />
            <Route path="/Usersrendering" element={<Usersrendering />} />
            <Route path="/Postsharing" element={<Postsharing />} />
            <Route path="/Calculator" element={<Calculator />} />
        </Routes>
    );
}
export default AppRoutes;