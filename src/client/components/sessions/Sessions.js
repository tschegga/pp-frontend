import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import moment from 'moment';

function Sessions({sessions}) {
    let cards = [];

    if (sessions.length > 0) {
        for (let i=0; i < sessions.length; i++) {
            let e = sessions[i];
            let rating = makeRating(e.quality);
            let start = moment.utc(e.start);
            let time = start.locale('de').format('dddd, D.M. HH:mm');
            let style = makeStyle(e.quality);

            cards.push(
                <div key={i} className={style}>
                    <div className="card-body">
                        <h5 className="card-title">Sitzung {i + 1}</h5>
                        <div className="card-text">Zeitpunkt: {time} Uhr
                        <br/>Länge: {e.length} mins
                        <br/>Qualität: {rating}</div>
                    </div>
                </div>
            )
        }
    }

    return(
        <div>
            <Link to="/addsession" role="button" className="mb-3 btn btn-outline-primary btn-lg btn-block">Add session</Link>
            <div className="card-group">
                {cards}
            </div>
        </div>
    );
}

function makeRating(level) {
    if (level == 0) {
        return 'unbefriedigend';
    } else if (level == 1) {
        return 'gut';
    } else if (level == 2) {
        return 'exzellent';
    } else {
        return 'unknown';
    }
}

function makeStyle(level) {
    if (level == 0) {
        return 'card bg-danger';
    } else if (level == 1) {
        return 'card bg-warning';
    } else if (level == 2) {
        return 'card bg-success';
    } else {
        return 'card';
    }
}

import * as Actions from '../../../common/actions';

const mapStateToProps = (state) => {
    return {
        sessions: state.user.sessions
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);