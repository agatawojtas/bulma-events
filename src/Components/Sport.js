import React, { Component } from "react";
import sportImage from "./sport.jpg";

export default class Sport extends Component {
    render() {
        return (
            <div class="column">
                <div class="notification">
                    <img className="image" />
                    <img src={sportImage} />
                    SPORT
                </div>
            </div>
        );
    }
}
