import React, { Component } from 'react';

class TimelineItem extends Component {


    // id: 1,
    // title: "Falcon 1 Makes History",
    // event_date_utc: "2008-09-28T23:15:00Z",
    // event_date_unix: 1222643700,
    // flight_number: 4,
    // details: "Falcon 1 becomes the first privately developed liquid fuel rocket to reach Earth orbit.",
    // links: - {
    // reddit: null,
    // article: "http://www.spacex.com/news/2013/02/11/flight-4-launch-update-0",
    // wikipedia: "https://en.wikipedia.org/wiki/Falcon_1"
    getStyle() {
        return {
            background: this.props.event.id === 1 ? 'white' : 'black'
        }
    }
    render() {

        return (
            <div className="timeline-item">
                <div className="column-1">
                    <div className="holder">
                        <p>{this.props.event.title}</p>
                    </div>
                </div>
                <div className="column-2">
                    <div className="line" style={this.getStyle()}></div>
                    <div className="circle"></div>
                    <div className="line"></div>
                </div>
                <div className="column-3">
                    <div className="holder">
                        <p>{this.props.event.details}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimelineItem;
