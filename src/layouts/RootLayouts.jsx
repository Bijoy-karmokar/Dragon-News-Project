import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import LatestNews from '../components/Navbar/LatestNews';

const RootLayouts = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto my-10'>
              <Navbar></Navbar>
              <LatestNews></LatestNews>
            </header>
            <main>
               <Outlet></Outlet>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default RootLayouts;