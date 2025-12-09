import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogIn = () => {
    return (
        <div>
            <h3 className='text-lg font-semibold mb-3'>LogIn with</h3>
           <div className='flex flex-col gap-3'>
             <button className='btn btn-outline btn-info'><FcGoogle size={20}></FcGoogle> Login With Google</button>
            <button className='btn btn-outline'><FaGithub size={20}></FaGithub> Login With Github</button>
           </div>
        </div>
    );
};

export default SocialLogIn;