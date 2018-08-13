import React, { Component } from "react";
import { auth, googleAuthProvider } from "../fire.js";

export default class Login extends Component {
    render() {
        return (
            <div className="buttons is-right">
                <button
                    onClick={() => auth.signInWithPopup(googleAuthProvider)}
                    className="button is-danger is-right "
                >
                    Log In
                </button>
            </div>
        );
    }
}
