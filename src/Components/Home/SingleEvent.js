import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SingleEvent = (props) => {
    const {_id,img,title,desc}=props.event;
    const history=useHistory();
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {desc.substr(0,120)}[...]
                        </Card.Text>
                        <div className="text-center">
                            <Button variant="primary" onClick={()=>history.push(`/orderPlace/${_id}`)}>Book this Event</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleEvent;