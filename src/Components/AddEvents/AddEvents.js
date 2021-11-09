import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddEvents = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        axios.post('https://frozen-escarpment-17880.herokuapp.com/events',data)
        .then(function (response){
            if(response.data.insertedId){
                alert('A event has been successfully inserted');
                reset();
            }
        })
    };
    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="mb-4">Add <span className="text-danger">Events</span></h2>
                <input placeholder="Image URL" {...register("img",{required:true})} />
                <br/>
                <br/>
                <input placeholder="Event Title" {...register("title",{required:true})} />
                <br/>
                <br/>
                <textarea placeholder="Description" {...register("desc",{required:true})} />
                <br/>
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvents;