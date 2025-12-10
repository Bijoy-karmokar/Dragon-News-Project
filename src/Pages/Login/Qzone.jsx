import React from 'react';
import swimming from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playGround from '../../assets/playground.png';

const Qzone = () => {
    return (
        <div className='bg-base-200 p-5 my-10 rounded-lg'>
            <h3 className='text-2xl'>Q-Zone</h3>
            <div className='flex flex-col justify-center items-center gap-10'>
               <img className='w-[240]' src={swimming} alt="" />
               <img className='w-[240]' src={classImg} alt="" />
               <img className='w-[240]' src={playGround} alt="" />
            </div>
        </div>
    );
};

export default Qzone;