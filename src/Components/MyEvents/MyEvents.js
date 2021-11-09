import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import UseAuth from '../AuthProvider/UseAuth';
import MyEvent from './MyEvent';

const MyEvents = () => {
    const { user } = UseAuth();
    const [events, setEvents] = useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:500/orders/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                setLoading(false);
            })
    }, [])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to proceed to deleting a tour plan!');
        if (proceed) {
            fetch(`http://localhost:500/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted a tour plan!');
                        const remainingEvents = events.filter(event => event._id !== id);
                        setEvents(remainingEvents);
                    }
                })
        }
    }
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">My <span className="text-warning">Tour Plans</span></h2>
            {
                (user.email) &&
                <Row xs={1} md={4} className="container g-4">
                    {
                        events.map(event => <MyEvent key={event._id} event={event} handleDelete={() => handleDelete(event._id)} />)
                    }
                </Row>
            }
            {
                (loading===true) &&
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
            {
                (events.length===0 && loading===false) &&
                    <h3 className="mt-3"><span className="text-danger">No tour  plans have been </span> recorded yet!</h3>
            }
        </div>
    );
};

export default MyEvents;