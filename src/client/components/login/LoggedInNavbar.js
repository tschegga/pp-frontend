import React from 'react';

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
                <button className="btn btn-outline-dark btn-sm" data-toggle="modal" data-target="#loginModal">Login</button>
            </div>
        );
    }
}

export default LoggedInNavbar;