import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import moment from 'moment';

import * as Actions from '../../../common/actions';

function makeRating(level) {
    switch (level) {
    case 0:
        return 'unbefriedigend';
    case 1:
        return 'gut';
    case 2:
        return 'exzellent';
    default:
        return 'unknown';
    }
}

function makeStyle(level) {
    switch (level) {
    case 0:
        return 'card bg-danger';
    case 1:
        return 'card bg-warning';
    case 2:
        return 'card bg-success';
    default:
        return 'card';
    }
}

function SessionsElements({ sessionsArray }) {
    const cards = [];

    if (sessionsArray.length > 0) {
        for (let i = 0; i < sessionsArray.length; i += 1) {
            const e = sessionsArray[i];
            const rating = makeRating(e.quality);
            const start = moment.utc(e.start);
            const time = start.locale('de').format('dddd, D.M. HH:mm');
            const style = makeStyle(e.quality);

            cards.push(
                <div key={i} className={style}>
                    <div className="card-body">
                        <h5 className="card-title">
                            Sitzung&nbsp;
                            {i + 1}
                        </h5>
                        <div className="card-text">
                            Zeitpunkt:&nbsp;
                            {time}
                            &nbsp;Uhr
                            <br />
                            Länge:&nbsp;
                            {e.length}
                            &nbsp;mins
                            <br />
                            Qualität:&nbsp;
                            {rating}
                        </div>
                    </div>
                </div>,
            );
        }
    }

    return (
        <div>
            <div className="card-group">
                {cards}
            </div>
        </div>
    );
}

SessionsElements.propTypes = {
    sessionsArray: PropTypes.arrayOf(PropTypes.shape({
        sessionid: PropTypes.number.isRequired,
        length: PropTypes.number.isRequired,
        quality: PropTypes.number.isRequired,
        start: PropTypes.string.isRequired,
    })).isRequired,
};

const mapStateToProps = state => ({ sessions: state.user.sessions });

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SessionsElements);
