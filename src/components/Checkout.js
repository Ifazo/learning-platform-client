import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {

    const data = useLoaderData();

    return (
        <div>
            <img src={data.logo} className='w-25' alt="" />
            <h6>Couse Name: {data.name}</h6>
        </div>
    );
};

export default Checkout;