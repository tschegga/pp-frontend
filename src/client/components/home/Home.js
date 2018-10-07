import React from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import WelcomeMessage from './WelcomeMessage';
import Overview from './Overview';
import Counter from './Counter';

const Home = (props) => {
    return(
        <div>
            <WelcomeMessage />
            <Overview user={props.user} sessions={props.sessions} />
            <Link to="/addsession" role="button" className="mt-3 btn btn-outline-secondary btn-lg btn-block">Add session</Link>
            <Counter />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        sessions: state.session
    }
}

export default connect(mapStateToProps)(Home);