import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="centered-items ">
                <div className="nav-center " />
                <a
                    href=" https://www.instagram.com/"
                    className="nav-item is-link is current "
                />
                <span className="icon is-medium " />
                <i className="fab  fa-instagram"> </i>

                <div className="nav-center" />
                <a href=" https://twitter.com/" className="nav-item" />
                <span className="icon is-medium" />
                <i className="fab  fa-twitter"> </i>

                <div className="nav-center" />
                <a href="https://www.facebook.com/ " className="nav-item" />
                <span className="icon is-medium" />
                <i className="fab  fa-facebook"> </i>
            </div>
        );
    }
}
