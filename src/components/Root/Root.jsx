import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import MainHome from '../Home/MainHome';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='pl-[2rem] pr-[2rem] m-auto'>
            <Navbar></Navbar>
            <MainHome></MainHome>
            <Footer></Footer>
        </div>
    );
};

export default Root;