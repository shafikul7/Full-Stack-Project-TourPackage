/** @format */

import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Carousels from '../Carousels/Carousels';
import Contact from '../Contact/Contact';
import Card from './Card';
import './Home.css';

const useStyles = makeStyles({
    root: {
        width: 1000,
    },
});

const Home = () => {
    const classes = useStyles();
    // eslint-disable-next-line no-unused-vars
    const { user, data } = useAuth();
    const [mainData, setMainData] = data;
    const [services, setServices] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        fetch('https://tourpackage.herokuapp.com/tourpackages')
            .then((res) => res.json())
            // eslint-disable-next-line no-shadow
            .then((data) => {
                console.log(data.length);
                setServices(data);
            });
    }, [setMainData]);

    // Get Search Query Tasks
    useEffect(() => {
        fetch(`https://tourpackage.herokuapp.com/tasks?filter=${filter}`)
            .then((res) => res.json())
            // eslint-disable-next-line no-shadow
            .then((data) => {
                setMainData(data);
            });
    }, [filter, setMainData]);
    console.log(mainData.length);
    const getQuery = (e) => setFilter(e.target.value);

    return (
        <div className="home">
            <div className="">
            <Carousels/>
            </div>
        <main className="vn-home">
            <div className="container text-center">
                <div className="vn-works-search">
                    <h2 className="display-5 mb-4">Select Your Best Package For Your Travel</h2>
                    <div className="form-group">
                        <input
                            id="query"
                            onChange={getQuery}
                            type="search"
                            placeholder="Search ... "
                            className="form-control"
                        />
                        <button className="btn btn-primary" type="button" id="button-addon2">
                            Search
                        </button>
                    </div>
                </div>
                <div className="vn-works py-3 mt-2">
                    {services.length ? (
                        <div className="row">
                            {services.map((task) => (
                                <Card task={task} key={Math.random()} />
                            ))}
                        </div>
                    ) : (
                        <div className={classes.root}>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <Skeleton variant="rect" height={250} animation="wave" />
                                    <Skeleton variant="text" height={30} animation="wave" />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <Skeleton variant="rect" height={250} animation="wave" />
                                    <Skeleton variant="text" height={30} animation="wave" />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <Skeleton variant="rect" height={250} animation="wave" />
                                    <Skeleton variant="text" height={30} animation="wave" />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <Skeleton variant="rect" height={250} animation="wave" />
                                    <Skeleton variant="text" height={30} animation="wave" />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
        <Contact/>
        </div>
    );
};

export default Home;
