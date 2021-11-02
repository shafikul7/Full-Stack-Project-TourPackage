
/** @format */
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ task }) => (
    <div className="col-lg-4 col-md-4 col-sm-6">
        <Link to={`/events/${task._id}`}>
            <div className="vn-works-card">
                <img style={{ maxWidth: '100%' }} src={task.img} alt="task" />
                
                <div className="vn-works-det pb-2">
                <h4>{task.name}</h4>
                <p>{task.description}</p>
                </div>
                <button class="btn btn-primary mb-4">Read More</button>
            </div>
        </Link>
        
    </div>
);

export default Card;
