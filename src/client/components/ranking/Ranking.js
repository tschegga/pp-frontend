import React from 'react';

export default function Ranking({ranking}) {
    let tbody = []; 

    if (ranking.length > 0) {
        for (let i=0; i < ranking.length; i++) {
            let e = ranking[i];
            tbody.push(
                <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.name}</td>
                    <td>{e.count}</td>
                </tr>
            );
        }
    }

    return(
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