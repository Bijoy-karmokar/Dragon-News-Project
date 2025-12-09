import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-2 p-3 bg-base-200 my-3'>
            <p className='btn btn-secondary px-5'>Latest</p>
            <Marquee pauseOnHover={true} speed={70} gradient={false}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptatum odio voluptatibus cum est dolorum totam dolor fugit, velit nemo dolore distinctio, molestias voluptate hic nesciunt quia eos eius excepturi.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;