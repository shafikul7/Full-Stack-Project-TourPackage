/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
// import trash from '../../images/logos/trash-2.png';

const VolunteerList = ({ tasks, deleteHandler, show, setShow }) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        {tasks.length > 0 ? (
                            tasks.map((task) => (
                                <tr key={task._id}>
                                    <td>{task.name}</td>
                                    <td>{task.email}</td>
                                    <td>{task.date}</td>
                                    <td>{task.title}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={handleShow}>
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

export default VolunteerList;
