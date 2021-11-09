import React from 'react';
import { Card, Col } from 'react-bootstrap';

const HotelsAndRestaurants = (props) => {
    const { img, title } = props.service;
    return (
        <div>
            <Col>
                <Card className="">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="text-muted">Call: +8801OP323232 to know more</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default HotelsAndRestaurants;