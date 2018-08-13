import React, { Component } from "react";
import foodImage from "./food.jpg";

export default class Food extends Component {
    render() {
        return (
            <div class="column">
                <div class="notification">
                    <img className="image" />
                    <img src={foodImage} />
                    FOOD
                </div>
            </div>
        );
    }
}
