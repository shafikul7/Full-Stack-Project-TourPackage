/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './EventTasks.css';
import Task from './Task';
import useAuth from '../../Hooks/useAuth';

const EventTasks = () => {
    const { allContext, data } = useAuth();
    const { user } = allContext;
    const [mainData, setMainData] = data;


    const [userTasks, setUserTasks] = useState([]);

    // Filtering tasks for an user
    useEffect(() => {
        fetch(`https://tourpackage.herokuapp.com/my-orders`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                email:user?.email
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setUserTasks([...data]);
            })
            .catch((err) => console.log(err));
    }, [user.email]);

    // Delete a task
    const deleteTask = (id) => {
        fetch(`https://tourpackage.herokuapp.com/order/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result, 'Task deleted');
                if (result) {
                    const newTasks = [...userTasks].filter((task) => task._id !== id);
                    setUserTasks(newTasks);
                }
            });
    };

    return (
        <div className="container py-5 my-5">
            <div className="vn-event-tasks">
                <div className="row">
                    {userTasks.length > 0 ? (
                        userTasks.map((task) => (
                            <Task task={task} key={Math.random()} deleteTask={deleteTask} />
                        ))
                    ) : (
                        <div style={{ maxWidth: '400px', margin: 'auto' }}>
                            <div className="alert alert-danger text-center">
                                No task found. Please login to add tasks.
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventTasks;
