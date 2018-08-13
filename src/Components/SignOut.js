import React, { Component } from "react";
import { auth, googleAuthProvider } from "../fire.js";

export default class SignOut extends Component {
    render() {
        return (
            <div className="buttons is-right">
                <button className="button is-danger is-right ">Sign Out</button>
            </div>
        );
    }
}
