import React, { Component } from "react";
import healthImage from "./health.jpg";

export default class Health extends Component {
    render() {
        return (
            <div class="column">
                <div class="notification">
                    <img className="image" />
                    <img src={healthImage} />
                    HEALTH
                </div>
            </div>
        );
    }
}
