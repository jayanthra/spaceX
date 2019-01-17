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

    dateConvert(part) {
        const date = new Date(this.props.event.event_date_unix * 1000);
        let datePart;
        if (part === "year")
            datePart = date.getFullYear();
        if (part === "month")
            datePart = date.getMonth();
        if (part === "day")
            datePart = date.getDate();
        return datePart;
    }

   

    getBGColor(index){      
        const colorSet = ["#b2dc33","#f1ce02","#ff79ac","#bcb6ff"]

        let hexVal = colorSet[index%4]

        return {
            background: hexVal
        }
    }

    render() {
        return (
            <div className="timeline-item">
                <div className="column-1">
                    <div className="holder" style={this.getBGColor(this.props.event.id)}>
                        <h3>{this.props.event.title}</h3>
                    </div>
                </div>
                <div className="column-2">
                    <div className="line" style={this.getStyle()}></div>
                    <div className="circle">
                        <div className="date-holder">                           
                            <p>{this.dateConvert("day")}-{this.dateConvert("month")}</p>
                            <p>{this.dateConvert("year")}</p>
                        </div>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="column-3">
                    <div className="holder" style={this.getBGColor(this.props.event.id+1)}>
                        <p>{this.props.event.details}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimelineItem;
