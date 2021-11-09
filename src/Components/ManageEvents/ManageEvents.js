import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import ManageEvent from './ManageEvent';

const ManageEvents = () => {
    const [orders, setOrders] = useState([]);
    const [click, setClick] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://frozen-escarpment-17880.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoading(false);
            })
    }, [click])

    const handleStatus = (id, event) => {
        const newEvent = event;
        if (newEvent.status === "pending") {
            newEvent.status = "approved";
        }
        else {
            newEvent.status = "pending";
        }
        fetch(`https://frozen-escarpment-17880.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Status of an event has been updated successfully!');
                    if (click === false) {
                        setClick(true);
                    }
                    else {
                        setClick(false);
                    }
                }
            })
    }

    const handleDelete = (id) => {
        const proceed = window.confirm('Confirm to proceed in the deletion of this event!');
        if (proceed) {
            fetch(`https://frozen-escarpment-17880.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfuly deleted an event!');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }
    }
    return (
        <div className="container mt-4">
            <h2 className="mb-4">Manage all <span className="text-warning">planned Events</span></h2>
            <Table striped bordered hover className="mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th> Name</th>
                        <th>Email</th>
                        <th>Event</th>
                        <th>Status</th>
                        <th>Change Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody className="text-center">
                    {
                        (loading === false) &&
                        orders.map(order => <ManageEvent key={order._id} order={order} handleStatus={() => handleStatus(order._id, order)} handleDelete={() => handleDelete(order._id)} />)
                    }
                </tbody>
            </Table>
            {
                (loading === true) &&
                <div className="text-center">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            }
        </div>
    );
};

export default ManageEvents;