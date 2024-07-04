import React from 'react';
import Navbar from '../Navbar/Navbar';
import MainHome from '../Home/MainHome';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MainHome></MainHome>
            <Footer></Footer>
        </div>
    );
};

export default Root;