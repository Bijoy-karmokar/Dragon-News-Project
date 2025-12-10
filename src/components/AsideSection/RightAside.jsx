import React from 'react';
import SocialLogIn from '../../Pages/Login/SocialLogIn';
import FindUS from '../../Pages/Login/FindUS';
import Qzone from '../../Pages/Login/Qzone';
import image from '../../assets/bg.png'
const RightAside = () => {
    return (
        <div>
           <SocialLogIn></SocialLogIn>
           <FindUS></FindUS>
           <Qzone></Qzone>
           <img className='w-full' src={image} alt="" />
        </div>
    );
};

export default RightAside;