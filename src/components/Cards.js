import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cards = (item) => {
    // console.log(item.item.id);

    return (
        <div className='row'>
            <div className='col-4 d-flex'>
                <Link to={`/courses/${item.item.id}`}><button className='btn btn-link'>{item.item.name}</button></Link>
            </div>
            <div className='col-4'>
                <Card>
                    <Card.Img className='img-fluid w-50 h-50 align-self-center' variant="top" src={item.item.logo} />
                    <Card.Body>
                        <Card.Title>{item.item.name}</Card.Title>
                        <Card.Text>
                            <Link className='btn btn-primary' to={`/courses/${item.item.id}`}>Details</Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Cards;