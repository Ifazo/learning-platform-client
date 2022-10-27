import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';

const Home = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h5>Home Page</h5>
            {
                data.map((item) => <Cards key={data.id} item={item}></Cards>
                )}
        </div>
    );
};

export default Home;