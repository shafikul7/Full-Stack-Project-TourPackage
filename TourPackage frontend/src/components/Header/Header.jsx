/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import userIcon from '../../images/logos/users-alt.png';
import './Header.css';

const Header = () => {
    const { allContext } = useAuth();
    const { user, logOut } = allContext;

    return (
        <header className="px-lg-5 px-0 navBg">
            <nav className="navbar navbar-expand-md navbar-light">
                <Link className="navbar-brand" to="/">
                    TourPackage
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto align-items-md-center">
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/package">
                                Package
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-3" to="/events">
                                Event
                            </Link>
                        </li>

                        {!user.isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                        )}
                        {!user.isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    <button className="btn btn-primary">Register</button>
                                </Link>
                            </li>
                        )}
                        {user.isLoggedIn && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">
                                    <button className="btn btn-dark">Admin</button>
                                </Link>
                            </li>
                        )}
                        {user.isLoggedIn && (
                            <li className="nav-item user pl-2">
                                {/* <img src={userIcon} alt="" /> */}
                                {user.name ? user.name.split(' ').slice(0, 1) : 'User'}
                            </li>
                        )}
                        {user.isLoggedIn && (
                            <li className="nav-item ">
                                <Link className="nav-link" to="/" onClick={logOut}>
                                    Logout
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
