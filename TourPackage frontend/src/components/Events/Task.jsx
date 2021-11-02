/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React from 'react';
import './EventTasks.css';

const Task = ({ task, deleteTask }) => {
    const deleteHandler = (id) => {
        if (window.confirm('.delete')) {
            deleteTask(id);
        }
    };


    return(
        <>
            <div className="col-lg-6">
                <div className="vn-task">
                <img style={{ maxWidth: '100%', minWidth: '100px' }} src={task.img} alt="task" />
                    <div className="info">
                        <h5>{task.title}</h5>
                        <p>{task.date}</p>
                    </div>
                    <button className="btn btn-secondary" onClick={() =>deleteHandler (task._id)}>
                        Cancel
                    </button>
                </div>
            </div>
        </>
    )
};

export default Task;
