import React, { Component } from "react";
import "./App.css";
import Title from "./Components/Title.js";
import Login from "./Components/Login.js";

import Footer from "./Components/Footer.js";
import Sport from "./Components/Sport.js";
import Food from "./Components/Food.js";
import Other from "./Components/Other.js";
import Meetings from "./Components/Meetings.js";
import Health from "./Components/Health.js";

import Pagination from "./Components/Pagination.js";
import CurrentUser from "./Components/CurrentUser.js";

import { database, auth, googleAuthProvider } from "./fire.js";

class App extends Component {
    state = {
        isHiddenCurrentUser: true
    };

    toggleHiddenCurrentUser = () => {
        this.setState({
            ...this.state,
            isHiddenCurrentUser: !this.state.isHiddenCurrentUser
        });
    };

    render() {
        return (
            <div>
                <Title />
                <Login />

                <CurrentUser />

                <section class="section">
                    <div class="container">
                        <div class="columns">
                            <Sport />
                            <Food />
                            <Other />
                            <Meetings />
                            <Health />
                        </div>
                    </div>
                </section>

                <Pagination />
                <Footer />
            </div>
        );
    }
}

export default App;
