import React from 'react';

const Overview = ({user}) => {
    return(
        <div className="card mt-3">
            <div className="card-header">
                Overview
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        Name: {user.username}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Rank: {user.rank}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Sessions: {user.sessions.length}
                    </div>
                </div>
            </div>
        </div>
    );
}

Overview.propTypes = {
    user: React.PropTypes.object.isRequired
};

export default Overview;