import React from 'react';

import DatePicker from 'react-mobile-datepicker';

export default class AddSession extends React.Component { // eslint-disable-line
    render() {
        return (
            <div>
                Addsession
                <DatePicker isOpen />
            </div>
        );
    }
}
