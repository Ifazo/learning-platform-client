import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf';

const ref = React.createRef();

const CardDetails = () => {

    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            <div>
                <ReactToPdf targetRef={ref} filename="details-print.pdf">
                    {({ toPdf }) => (
                        <button onClick={toPdf}>Generate pdf</button>
                    )}
                </ReactToPdf>
                <div className='w-100 h-auto' ref={ref} >
                    <div className='container-fluid'>
                        <img src={course.logo} className='w-25' alt="" />
                        <h6>Couse Name: {course.name}</h6>
                        <p>Couse Details: {course.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;