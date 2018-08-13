import React, { Component, PropTypes } from "react";
import { auth } from "../fire";

import SignOut from "./SignOut.js";

export default class CurrentUser extends Component {
    render() {
        return (
            <div class="column">
                <div class="notification">
                    <img className="image" />
                    <SignOut />
                </div>
            </div>
        );
    }
}
