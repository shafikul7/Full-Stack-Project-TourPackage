/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import AdminServiceListDetails from './AdminServiceListDetails';

const ManageOrder = ({ orders, deleteHandler, show, setShow }) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(orders);
    return (
        <div className="admin-vol-list">
            <h5 className="display-5 py-lg-4 pb-2">TourPackage register list</h5>
            <div className="admin-content">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Registration Date</th>
                            <th>Volunteer task</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((service) => (
                                <AdminServiceListDetails key={service._id} service={service} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">
                                    <div className="alert alert-warning text-center" role="alert">
                                        No task found on database
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrder;
