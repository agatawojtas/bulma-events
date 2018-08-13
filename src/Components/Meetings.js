import React, { Component } from "react";
import meetingsImage from "./meeting.jpg";

export default class Meetings extends Component {
    render() {
        return (
            <div class="column">
                <div class="notification">
                    <img className="image" />
                    <img src={meetingsImage} />
                    MEETINGS
                </div>
            </div>
        );
    }
}
