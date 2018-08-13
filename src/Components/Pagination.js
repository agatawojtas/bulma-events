import React, { Component } from "react";

export default class Pagination extends Component {
    render() {
        return (
            <div className="block">
                <nav className="pagination">
                    <a href=" " className="pagination-previous" disabled>
                        Previous
                    </a>
                    <a href=" " className="pagination-next ">
                        Next
                    </a>
                    <ul className="pagination-list">
                        <li>
                            <a href=" " className="pagination-link is-currnet">
                                1
                            </a>
                        </li>

                        <li>
                            <a href=" " className="pagination-link">
                                2
                            </a>
                        </li>
                        <li>
                            <a href=" " className="pagination-link">
                                3
                            </a>
                        </li>
                        <li>
                            <a href=" " className="pagination-link">
                                4
                            </a>
                        </li>
                        <li>
                            <a href=" " className="pagination-link">
                                5
                            </a>
                        </li>
                        <li>
                            <a href=" " className="pagination-link">
                                6
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
