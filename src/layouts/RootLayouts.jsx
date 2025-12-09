import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import LatestNews from '../components/Navbar/LatestNews';
import Header from '../components/Navbar/Header';
import LeftAside from '../components/AsideSection/LeftAside';
import RightAside from '../components/AsideSection/RightAside';

const RootLayouts = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto my-10'>
              <Navbar></Navbar>
              <LatestNews></LatestNews>
              <Header></Header>
            </header>
            <main className='w-11/12 mx-auto my-10 grid grid-cols-12 gap-5'>
                <section className='col-span-3'>
                   <LeftAside></LeftAside>
                </section>
               <section className='col-span-6'>
                <Outlet></Outlet>
               </section>
               <section className='col-span-3'>
                  <RightAside></RightAside>
               </section>
            </main>
            <footer>

            </footer>
        </div>
    );
};

export default RootLayouts;