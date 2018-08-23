import React from 'react';
import Ranking from './Ranking';
import {fetchData} from '../../backend/backend';

export default class RankingController extends React.Component {
    constructor() {
        super();
    
        this.state = {
            ranking: [
                {name: 'Silvan', count: 19},
                {name: 'Addy', count: 19},
                {name: 'Lari', count: 17}
            ]
        };
    }

    componentDidMount() {
        fetchData('/v1/ranking').then(ranking => {
            this.setState({
                ranking: ranking
            });
        });
    }

    render() {
        return(
            <Ranking ranking={this.state.ranking} />
        );
    }
}