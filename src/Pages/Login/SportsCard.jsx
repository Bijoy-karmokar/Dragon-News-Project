import React from 'react';
import sport1 from "../../assets/sports.avif"
import sport2 from "../../assets/sports1.jpg"
import sport3 from "../../assets/sports2.webp"
import { format } from 'date-fns';
import { LuBook } from 'react-icons/lu';

const SportsCard = () => {
    return (
        <div className='space-y-5 p-5'>
            <div className='space-y-3 bg-base-200 p-5 rounded-lg'>
                <img src={sport1} alt="" />
                <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex justify-between items-center'>
                    <p>sports</p>
                    <p className='flex items-center gap-1'><LuBook></LuBook> {format(new Date(), "MMM dd, yyyy")}</p>
                </div>
            </div> 
            <div className='space-y-3 bg-base-200 p-5 rounded-lg'>
                <img src={sport2} alt="" />
                <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex justify-between items-center'>
                    <p>sports</p>
                    <p className='flex items-center gap-1'><LuBook></LuBook> {format(new Date(), "MMM dd, yyyy")}</p>
                </div>
            </div> 
            <div className='space-y-3 bg-base-200 p-5 rounded-lg'>
                <img src={sport3} alt="" />
                <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex justify-between items-center'>
                    <p>sports</p>
                    <p className='flex items-center gap-1'><LuBook></LuBook>{format(new Date(), "MMM dd, yyyy")}</p>
                </div>
            </div> 
            <div className='space-y-3 bg-base-200 p-5 rounded-lg'>
                <img src={sport1} alt="" />
                <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                <div className='flex justify-between items-center'>
                    <p>sports</p>
                    <p className='flex items-center gap-1'><LuBook></LuBook>{format(new Date(), "MMM dd, yyyy")}</p>
                </div>
            </div> 
        </div>
    );
};

export default SportsCard;