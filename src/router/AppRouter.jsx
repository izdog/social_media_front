import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Home from '../pages/Home'
import { isAuth } from "../auth/AuthService";

export default function AppRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<PublicWrapper currentUser={isAuth()}>
                    <SignIn/>
                </PublicWrapper>} />
                <Route path="/signup" element={<PublicWrapper currentUser={isAuth()}>
                    <SignUp/>
                </PublicWrapper>} />
                <Route path="/" element={<PrivateWrapper currentUser={isAuth()}>
                    <Home />                    
                </PrivateWrapper>} />
            </Routes>
        </BrowserRouter>
    )
}

const PublicWrapper = ({children, currentUser}) => {
    return currentUser ? <Navigate to="/" replace /> : children
}

const PrivateWrapper = ({children, currentUser}) => {
    return !currentUser ? <Navigate to="/signin" replace /> : children
}

