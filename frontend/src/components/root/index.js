// frontend\src\components\root\index.js

import React from 'react';
import Navigation from '../navigation';
import { Outlet } from 'react-router-dom';
import Footer from "../footer";
import ScrollToTop from "../scrollToTop";

const Root = () => {
    return (
        <>
            <ScrollToTop />
            <Navigation/>
            <Outlet />
            <Footer/>
        </>
    );
};

export default Root;