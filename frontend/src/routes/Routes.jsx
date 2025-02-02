import React, { useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import Layout from '../layout/Layout';
import App from '../App';
import SignupPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import SettingsPage from "../pages/SettingsPage";
import ProfilePage from "../pages/ProfilePage";
import { useAuthStore } from '../store/useAuthStore';
import { Loader } from "lucide-react";
import ChatPage from '../pages/ChatPage';

export const Routes = () => {
    const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

    useEffect(() => { checkAuth(); }, [checkAuth]);
    console.log({ authUser });

    // Show a loader while checking authentication
    if (isCheckingAuth && !authUser) {
        return <div className="flex items-center justify-center h-screen">
            <Loader className="size-10 animate-spin" />
        </div>
    }

    // Dynamically define routes based on `authUser`
    const router = createBrowserRouter([
        {
            path: "",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: authUser ? <App /> : <Navigate to="/login" />
                },
                {
                    path: "/chat",
                    element: authUser ? <ChatPage /> : <Navigate to="/login" />
                },
                {
                    path: "/signup",
                    element: !authUser ? <SignupPage /> : <Navigate to="/" />
                },
                {
                    path: "/login",
                    element: !authUser ? <LoginPage /> : <Navigate to="/" />
                },
                {
                    path: "/settings",
                    element: <SettingsPage />
                },
                {
                    path: "/profile",
                    element: authUser ? <ProfilePage /> : <Navigate to="/login" />
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};
