/* eslint-disable no-underscore-dangle */
/** @format */

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const AdminServiceListDetails = ({ service }) => {
    const [pending, setPending] = useState(service.status.toLowerCase() === 'pending');
    const statusHandler = (e) => {
        setPending(!pending);
        fetch(`https://tourpackage.herokuapp.com/order/${service._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                status: e.target.value,
                id: service._id,
            }),
        }).then((res) => res.json());
    };

    return (
        <>
            <tr style={{ fontWeight: '400' }}>
                <td>{service.product.name}</td>
                <td>{service.email}</td>
                <td>{service.serviceTitle}</td>
                <td>{service.projectDetails}</td>
                <td>
                    {pending && (
                        <Form.Control as="select" className="text-danger" onChange={statusHandler}>
                            <option selected style={{ color: '#FF4545' }}>
                                Pending
                            </option>
                            <option style={{ color: '#009444' }}>Done</option>
                        </Form.Control>
                    )}
                    {!pending && (
                        <Form.Control className="text-success" as="select" onChange={statusHandler}>
                            <option style={{ color: '#FF4545' }}>Pending</option>
                            <option selected style={{ color: '#009444' }}>
                                Done
                            </option>
                        </Form.Control>
                    )}
                </td>
            </tr>
        </>
    );
};

export default AdminServiceListDetails;
