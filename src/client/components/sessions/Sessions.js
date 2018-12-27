import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from '../../../common/store/store';

import SessionsElements from './SessionsElements';
import { fetchSessions } from '../../../common/actions/sessions';

import * as Actions from '../../../common/actions';

class Sessions extends React.Component {
    componentDidMount() {
        // TODO: use the userid of the current user
        store.dispatch(fetchSessions(2));
    }

    render() {
        const { sessions } = this.props;
        return (
            <SessionsElements sessionsArray={sessions.sessionsArray} />
        );
    }
}

Sessions.propTypes = {
    sessions: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        sessionsArray: PropTypes.array,
    }).isRequired,
};

const mapStateToProps = state => ({
    sessions: state.sessions,
    user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);
