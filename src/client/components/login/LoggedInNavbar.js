import React from 'react';
import { Link } from 'react-router-dom';

const LoggedInNavbar = ({user}) => {
    if (user.loggedIn) {
        return (
            <div className="navbar-nav ml-auto">
                <span className="navbar-text mr-2">Hello {user.username}</span>
                <button className="btn btn-outline-dark btn-sm" data-toggle="modal" data-target="#logoutModal">Logout</button>
            </div>
        );
    } else {
        return (
            <div className="navbar-nav ml-auto">
                <span className="navbar-text mr-2">You are not logged in</span>
                <Link className="btn btn-outline-dark btn-sm" to="/login">Login</Link>
            </div>
        );
    }
}

export default LoggedInNavbar;