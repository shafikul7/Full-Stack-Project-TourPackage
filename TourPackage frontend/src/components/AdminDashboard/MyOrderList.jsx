/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyOrderList = ({ orders, deleteHandler, show, setShow }) => {
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
                            orders.map((task) => (
                                <tr key={task._id}>
                                    <td>{task.name}</td>
                                    <td>{task.email}</td>
                                    <td>{task.date}</td>
                                    <td>{task.title}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={handleShow}>
                                            {/* <img
                                                src={trash}
                                                alt="delete"
                                                style={{ width: '21px' }}
                                            /> */}
                                        </button>
                                    </td>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Attention!</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Are you want to delete this?</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="warning" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button
                                                variant="danger"
                                                onClick={() => deleteHandler(task._id)}
                                            >
                                                Confirm
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </tr>
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

export default MyOrderList;
