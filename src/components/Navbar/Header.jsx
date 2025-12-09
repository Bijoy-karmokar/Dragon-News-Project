import React from 'react';
import { NavLink } from 'react-router';
import profileImg from "../../assets/user.png"

const Header = () => {
    return (
        <div className='flex justify-between items-center my-3'>
            <div className="left-part"></div>
            <div className="mid-part">
                <NavLink className={({isActive})=>{isActive ? "bg-red-600 text-white" : ""}} to="/"> Home </NavLink>
                <NavLink className={({isActive})=>{isActive ? "bg-red-600 text-white" : ""}} to="/about"> About </NavLink>
                <NavLink className={({isActive})=>{isActive ? "bg-red-600 text-white" : ""}} to="/career"> Career </NavLink>
            </div>
            <div className="flex items-center gap-3">
                <img src={profileImg} alt="" />
                <button className='btn btn-primary'>LogIn</button>
            </div>
        </div>
    );
};

export default Header;