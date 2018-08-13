import React, { Component } from "react";
import otherImage from "./other.jpg";

export default class Other extends Component {
    render() {
        return (
            <div class="column">
                <div class="notification">
                    <img className="image" />
                    <img src={otherImage} />
                    OTHER
                </div>
            </div>
        );
    }
}
