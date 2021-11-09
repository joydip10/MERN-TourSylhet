import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import UseAuth from '../AuthProvider/UseAuth';
import axios from "axios";

const OrderPlace = () => {
    const { id } = useParams();
    const [event, setEvent] = useState({});
    const {user} = UseAuth();
    useEffect(() => {
        fetch(`https://frozen-escarpment-17880.herokuapp.com/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setEvent(data);
            })
    }, [])
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        data.img=event.img;
        data.title=event.title;
        data.desc=event.desc;
        data.status="pending";
        axios.post('https://frozen-escarpment-17880.herokuapp.com/orders',data)
        .then(function(res){
            if(res.data.insertedId){
                alert(`Trip to ${event.title} has been successfully booked on the app`);
                reset();
            }
        })
    };

    return (
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-3 mb-5">
            
            <Card style={{ width: '18rem' }} className="me-5">
                <Card.Img variant="top" src={event.img} />
                <Card.Body>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Text style={{ textAlign: 'justify' }}>
                        {event.desc}
                    </Card.Text>
                </Card.Body>
            </Card>
            <form onSubmit={handleSubmit(onSubmit)} className="ms-5">
                <h3>Place<span className="text-warning">Order</span></h3>
                <input placeholder="Enter Email" defaultValue={user.email} {...register("email",{required:true})} />
                <br/>
                <br/>
                <input placeholder="Enter Name" defaultValue={user.displayName} {...register("name",{required:true})} />
                <br/>
                <br/>
                <input placeholder="Enter Phone"{...register("phone",{required:true})} />
                <br/>
                <br/>
                <input placeholder="Enter Adress"{...register("adress",{required:true})} />
                <br/>
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default OrderPlace;