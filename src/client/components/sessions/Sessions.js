import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from '../../../common/store/store';

import SessionsElements from './SessionsElements';
import { fetchSessions } from '../../../common/actions/sessions';

import * as Actions from '../../../common/actions';

class Sessions extends React.Component {
    constructor() {
        super();

        store.dispatch(fetchSessions(2));
    }

    componentDidMount() {
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

const mapStateToProps = state => ({ sessions: state.sessions });

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);
