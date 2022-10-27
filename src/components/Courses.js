import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';

const Courses = () => {

    const data = useLoaderData();
    console.log(data);
    
    return (
        <div>
            <h3>Courses page</h3>
            {
                data.map(item => <Cards key={data.id} item={item}></Cards>
            )}
        </div>
    );
};

export default Courses;