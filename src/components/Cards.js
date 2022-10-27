import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cards = (item) => {
    // console.log(item.item.id);
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.item.logo} />
            <Card.Body>
                <Card.Title>{item.item.name}</Card.Title>
                <Card.Text>
                    {/* {item.item.description} */}
                <Link className='btn btn-primary' to={`/courses/${item.item.id}`}>Details</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Cards;