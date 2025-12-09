import React, { use } from 'react';
import { NavLink } from 'react-router';

const promiseCategoris = fetch("/categories.json").then(res=>res.json());

const Categories = () => {
     const categories = use(promiseCategoris);
    return (
        <div>
            <h3 className='font-bold'>All Categories ({categories.length})</h3>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(category=><NavLink  to={`/category/${category.id}`} className={"btn bg-base-100 hover:bg-base-200 border-0"} key={category.id} >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;