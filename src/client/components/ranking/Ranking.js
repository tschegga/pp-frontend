import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as Actions from '../../../common/actions';

function Ranking(props) {
    const { ranking: { isFetching } } = props;
    if (isFetching) {
        return (
            <div>Fetching</div>
        );
    }

    const { ranking: { rankingArray } } = props;
    const tbody = [];

    if (rankingArray.length > 0) {
        for (let i = 0; i < rankingArray.length; i += 1) {
            const e = rankingArray[i];
            tbody.push(
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.count}</td>
                </tr>,
            );
        }
    }

    return (
        <div>
            <table className="table table-sm table-hover">
                <thead>
                    <tr>
                        <th>Rang</th>
                        <th>Name</th>
                        <th>Sitzungen</th>
                    </tr>
                </thead>

                <tbody>
                    {tbody}
                </tbody>
            </table>
        </div>
    );
}

Ranking.propTypes = {
    ranking: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        rankingArray: PropTypes.arrayOf(PropTypes.element),
    }),
};

Ranking.defaultProps = {
    ranking: {
        isFetching: false,
        rankingArray: [],
    },
};

const mapStateToProps = state => ({ ranking: state.ranking });

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Ranking));
