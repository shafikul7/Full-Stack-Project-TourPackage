/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/** @format */

import React, { useState } from 'react';

const AddEvent = () => {
    const [status, setStatus] = useState(false);

    const [addTask, setTask] = useState({
        name: '',
        img: '',
        description: ''
    });

    // Add an event task
    const handleAddEvent = (e) => {
        e.preventDefault();
        fetch('https://tourpackage.herokuapp.com/tourpackages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addTask),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setStatus(!status);
            })
            .catch((err) => console.log(err));
    };

    // Input fields handler
    const handleInputValues = (e) => {
        if (e.target.value.trim().length > 0) {
            const newTask = { ...addTask };
            newTask[e.target.name] = e.target.value;
            setTask(newTask);
        }
    };

    return (
        <div className="admin-add-event">
            <h5 className="display-5 py-md-4 py-0">Add event</h5>
            {status && (
                <div className="alert alert-success text-center" role="alert">
                    New task added successfully
                </div>
            )}
            <div className="admin-content">
                <form action="/addEvent" onSubmit={handleAddEvent}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Enter Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter title"
                                    name="name"
                                    onChange={handleInputValues}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Enter image</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter title"
                                    name="img"
                                    onChange={handleInputValues}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Description"
                                    name="description"
                                    onChange={handleInputValues}
                                    required
                                />
                            </div>
                        </div>
                       
                        <div className="col-md-12 col-md-12 text-right">
                            <button type="submit-" className="btn btn-primary">
                                submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEvent;
