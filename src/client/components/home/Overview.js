import React from 'react';
import PropTypes from 'prop-types';

const Overview = ({ user }) => (
    <div className="card mt-3">
        <div className="card-header">
            Overview
        </div>
        <div className="card-body">
            <div className="row">
                <div className="col">
                    Name:&nbsp;
                    {user.username}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Rank:&nbsp;
                    {user.rank}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Sessions:&nbsp;
                    {user.sessions.length}
                </div>
            </div>
        </div>
    </div>
);

Overview.propTypes = {
    user: PropTypes.element.isRequired,
};

export default Overview;
