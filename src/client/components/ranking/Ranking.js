import React from 'react';
import PropTypes from 'prop-types';

export default function Ranking({ ranking }) {
    const tbody = [];

    if (ranking.length > 0) {
        for (let i = 0; i < ranking.length; i += 1) {
            const e = ranking[i];
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
    ranking: PropTypes.element.isRequired,
};
