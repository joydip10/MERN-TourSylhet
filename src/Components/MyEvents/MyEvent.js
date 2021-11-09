import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const MyEvent = (props) => {
    const { img, title, status } = props.event;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <p className="text-success">Status: {status}</p>
                        <div className="text-center">
                            <Button variant="secondary" onClick={props.handleDelete}>Delete This Place</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default MyEvent;