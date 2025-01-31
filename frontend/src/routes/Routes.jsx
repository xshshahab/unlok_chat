import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from '../layout/Layout';
import App from '../App';
import SignupPage from "../pages/SignUpPage"
import LoginPage from "../pages/LoginPage";
import SettingsPage from "../pages/SettingsPage";
import ProfilePage from "../pages/ProfilePage"


const router = createBrowserRouter([
    {
        path: "",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/signup",
                element: <SignupPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/setting",
                element: <SettingsPage />
            },
            {
                path: "/profile",
                element: <ProfilePage />
            }
        ]
    }
])

const Routes = () => {
    return <RouterProvider router={router} />
}

export default Routes