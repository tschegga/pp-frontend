import React from 'react';
import Sessions from './Sessions';
import { fetchData } from '../../backend/backend';

export default class SessionController extends React.Component {
    constructor() {
        super();

        this.state = {
            sessions: [],
        };
    }

    componentDidMount() {
        fetchData('/v1/session?userid=2').then((sessions) => {
            this.setState({
                sessions,
            });
        });
    }

    render() {
        const { sessions } = this.state;
        return (
            <Sessions sessions={sessions} />
        );
    }
}
