import React from 'react';

import { connect } from 'react-redux';

import WelcomeMessage from './WelcomeMessage';
import Overview from './Overview';

const Home = (props) => {
    return(
        <div>
            <WelcomeMessage />
            <Overview user={props.user} sessions={props.sessions} />
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