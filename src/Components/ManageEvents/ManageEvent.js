import React from 'react';
import { Button } from "react-bootstrap";
const ManageEvent = (props) => {
    const { _id, name, email, title, status } = props.order;
    return (
        <tr>
            <td>{_id}</td>
            <td> {name}</td>
            <td>{email}</td>
            <td>{title}</td>
            <td>{status}</td>
            <td>
                <Button variant="success" onClick={props.handleStatus}> Change Status </Button>
            </td>
            <td>
                <Button variant="danger" onClick={props.handleDelete}> Delete </Button>
            </td>
        </tr>
    );
};

export default ManageEvent;