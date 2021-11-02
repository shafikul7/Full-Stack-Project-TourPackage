/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/** @format */

import React, { useEffect, useState } from 'react';
import AddEvent from './AddEvent';
import './AdminDashboard.css';
import ManageOrder from './ManageOrder';
import MyOrderList from './MyOrderList';
import VolunteerList from './VolunteerList';

const AdminDashboard = () => {
    const [volunteerList, setVolunteerList] = useState([]);
    const [myOrderList, setmyOrderList] = useState([]);
    const [manageOrder, setManageOrder] = useState([]);
    const [show, setShow] = useState(false);

    const [toggleView, setToggleView] = useState({
        showList: true,
        showAddEvent: false,
        myOrders: false,
        manageOrder: false,
    });

    // Get register users data and update volunteerList
    useEffect(() => {
        if (toggleView.showList) {
            fetch('https://tourpackage.herokuapp.com/loadVolunteerList')
                .then((res) => res.json())
                .then((data) => setVolunteerList(data));
        }
        if (toggleView.myOrders) {
            fetch('http://localhost:5001/my-orders', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    email: '',
                },
            })
                .then((res) => res.json())
                .then((data) => setmyOrderList(data));
        }
        if (toggleView.manageOrder) {
            fetch('https://tourpackage.herokuapp.com/orders')
                .then((res) => res.json())
                .then((data) => setManageOrder(data));
        }
    }, [toggleView.showList, toggleView.myOrders, toggleView.manageOrder]);
    console.log(myOrderList);

    // Delete a registered user
    const handleDeleteEvent = (id) => {
        console.log('delete clicked', id);
        fetch(`https://tourpackage.herokuapp.com/admin/deleteTask/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result, 'Task deleted');
                if (result) {
                    const newVolList = volunteerList.filter((task) => task._id !== id);
                    setVolunteerList(newVolList);
                }
            });
        setShow(false);
    };

    // Toggle admin menu
    const handleListView = () => {
        setToggleView({
            ...toggleView,
            showList: true,
            showAddEvent: false,
            myOrders: false,
            manageOrder: false,
        });
    };

    const handleAddEventView = () => {
        setToggleView({
            ...toggleView,
            showList: false,
            showAddEvent: true,
            myOrders: false,
            manageOrder: false,
        });
    };

    const handleMyOrders = () => {
        setToggleView({
            ...toggleView,
            showList: false,
            showAddEvent: false,
            myOrders: true,
            manageOrder: false,
        });
    };

    const handleManageOrder = () => {
        setToggleView({
            ...toggleView,
            showList: false,
            showAddEvent: false,
            myOrders: false,
            manageOrder: true,
        });
    };

    const style = {
        primary: {
            color: '#3f90fc',
        },
        default: {
            color: '#000000',
        },
    };

    return (
        <div className="container-fluid">
            <div className="vn-admin-dashboard px-lg-5 px-0">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="admin-controls py-3 d-flex flex-lg-column">
                            <button
                                className="btn"
                                onClick={handleListView}
                                style={toggleView.showList ? style.primary : style.default}
                            >
                                <span>TourPackage register list</span>
                            </button>
                            <button
                                className="btn"
                                onClick={handleAddEventView}
                                style={toggleView.showAddEvent ? style.primary : style.default}
                            >
                                <span>Add event</span>
                            </button>
                            <button
                                className="btn"
                                onClick={handleMyOrders}
                                style={toggleView.myOrders ? style.primary : style.default}
                            >
                                <span>My Orders</span>
                            </button>
                            <button
                                className="btn"
                                onClick={handleManageOrder}
                                style={toggleView.manageOrder ? style.primary : style.default}
                            >
                                <span>Manage Orders</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        {toggleView.showList && (
                            <VolunteerList
                                tasks={volunteerList}
                                deleteHandler={handleDeleteEvent}
                                show={show}
                                setShow={setShow}
                            >
                                {' '}
                            </VolunteerList>
                        )}
                        {toggleView.myOrders && (
                            <MyOrderList
                                orders={myOrderList}
                                deleteHandler={handleDeleteEvent}
                                show={show}
                                setShow={setShow}
                            >
                                {' '}
                            </MyOrderList>
                        )}
                        {toggleView.manageOrder && (
                            <ManageOrder
                                orders={manageOrder}
                                deleteHandler={handleDeleteEvent}
                                show={show}
                                setShow={setShow}
                            >
                                {' '}
                            </ManageOrder>
                        )}
                        {toggleView.showAddEvent && <AddEvent />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
