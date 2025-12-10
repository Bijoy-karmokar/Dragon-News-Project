import React, { Suspense } from 'react';
import Categories from './Categories';
import SportsCard from '../../Pages/Login/SportsCard';

const LeftAside = () => {
    
    return (
        <div>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
            <Categories></Categories>
            </Suspense>
            <SportsCard></SportsCard>
        </div>
    );
};

export default LeftAside;