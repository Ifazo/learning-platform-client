import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {

    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            <div className='container-fluid'>
                <img src={course.logo} className='w-25' alt="" />
                <h6>Couse Name: {course.name}</h6>
                <p>Couse Details: {course.description}</p>
            </div>
        </div>
    );
};

export default CardDetails;