import React from 'react';

import Countdown from 'react-countdown-now';

const Counter = () => {
    return(
        <div className="card mt-3">
            <div className="card-header">
                Time left
            </div>
            <div className="card-body">
                <Countdown date={Date.now() + 604800000} />
            </div>
        </div>
    );
}

export default Counter;