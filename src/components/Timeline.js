import React, { Component } from 'react';
import TimelineItem from './TimelineItem';
import axios from 'axios'

class Timeline extends Component {

    constructor() {
        super()

        this.state = {
            events: []
        }
    }

    componentDidMount() {
        axios.get('https://api.spacexdata.com/v3/history')
            .then(res => {
                const events = res.data;
                this.setState({ events });
            })
    }



    render() {
        return (
            <ul>
                {this.state.events.map(event => <TimelineItem key={event.id} 
                                                              event={event}/>)}
            </ul>
        );
    }
}

export default Timeline;