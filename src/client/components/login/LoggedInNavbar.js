import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const LoggedInNavbar = ({ user }) => {
    if (user.loggedIn) {
        return (
            <div className="navbar-nav ml-auto">
                <span className="navbar-text mr-2">
                    Hello&nbsp;
                    {user.username}
                </span>
                <button type="button" className="btn btn-outline-dark btn-sm" data-toggle="modal" data-target="#logoutModal">Logout</button>
            </div>
        );
    }

    // if user is not logged in
    return (
        <div className="navbar-nav ml-auto">
            <span className="navbar-text mr-2">You are not logged in</span>
            <Link className="btn btn-outline-dark btn-sm" to="/login">Login</Link>
        </div>
    );
};

LoggedInNavbar.propTypes = {
    user: PropTypes.element.isRequired,
};

export default LoggedInNavbar;
