import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {

    const topic = useLoaderData();
    console.log(topic)
    
    return (
        <div>
            <h3>Courses page</h3>
        </div>
    );
};

export default Courses;