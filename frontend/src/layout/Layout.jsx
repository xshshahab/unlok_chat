import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <Toaster />
        </>
    );
}

export default Layout