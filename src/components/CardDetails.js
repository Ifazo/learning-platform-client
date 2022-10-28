import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf';
import { AuthContext } from '../context/UserContext';
import Login from './Login';

const ref = React.createRef();

const CardDetails = () => {

    const {user} = useContext(AuthContext)

    const course = useLoaderData();
    // console.log(course);
    return (
        <div>
            {user && user.email ? <div>
                <ReactToPdf targetRef={ref} filename="details-print.pdf">
                    {({ toPdf }) => (
                        <button className='btn btn-outline-secondary' onClick={toPdf}>Generate pdf</button>
                    )}
                </ReactToPdf>
                <Link className='btn btn-primary' to={`/pay/${course.id}`}>Check Out</Link>
                <div className='w-100 h-auto' ref={ref} >
                    <div className='container-fluid'>
                        <img src={course.logo} className='w-25' alt="" />
                        <h6>Couse Name: {course.name}</h6>
                        <p>Couse Details: {course.description}</p>
                    </div>
                </div>
            </div> : <Login></Login>}
            
        </div>
    );
};

export default CardDetails;