import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import WelcomeMessage from './WelcomeMessage';
import Overview from './Overview';
import Counter from './Counter';

const Home = (props) => {
    const { user, sessions } = props;
    return (
        <div>
            <WelcomeMessage />
            <Overview user={user} sessions={sessions} />
            <Link to="/addsession" role="button" className="mt-3 btn btn-outline-secondary btn-lg btn-block">Add session</Link>
            <Counter />
        </div>
    );
};

Home.propTypes = {
    user: PropTypes.element.isRequired,
    sessions: PropTypes.element.isRequired,
};

const mapStateToProps = state => ({
    user: state.user,
    sessions: state.session,
});

export default connect(mapStateToProps)(Home);
