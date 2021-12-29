import { Routes as ReactRoutes, Route } from "react-router-dom";
import { HomePage } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

import React from 'react'

export const Routes = () => {
    return (
        <ReactRoutes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </ReactRoutes>
    )
}
