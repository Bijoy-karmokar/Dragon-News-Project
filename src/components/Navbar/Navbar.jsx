import React from 'react';
import logo from "../../assets/logo.png"
import { format } from "date-fns";

const Navbar = () => {
    return (
        <div className='text-center space-y-5'>
            <img className='mx-auto' src={logo} alt="Image not found" />
            <h3 className='text-lg font-normal '>Journalism Without Fear or Favour</h3>
            <p className='font-medium'>{format(new Date(),"EEEE , MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Navbar;