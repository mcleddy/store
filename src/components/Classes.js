import React, { Component } from "react";
import Navbar from "./Navbar"
import { Jumbotron } from "reactstrap";
export default class Classes extends Component {
    render() {
        return (
            <div className="classes-container">
                <div className="row">
                    <div className="col-12">
                        <div className="triangle-down">
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="classesTitle">
                            <h1 className="text-title">Our Classes</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="announcements">
                        <div className="col-3 ">
                            <h3>Announcements</h3>
                        </div>
                        <h4 className="announcement">Lorem ipsum dolor sit </h4>
                        <br></br>
                        <h4 className="announcement">Lorem ipsum dolor sit amet</h4>
                        <br></br>
                        <h4 className="announcement">Lorem ipsum dolor sitt</h4>
                        <br></br>
                        <h4 className="announcement">Lorem ipsum dolor sit amet</h4>

                    </div>

                    <div className="col-8">
                        <div className="classListing">
                            <h2>Class 1</h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
                            <h3>Mondays 2pm - 5pm</h3>
                        </div>
                        <hr></hr>
                        <div className="classListing">
                            <h2>Class 1</h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
                            <h3>Mondays 2pm - 5pm</h3>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="col-10">
                        <div className="classListing">
                            <h2>Class 1</h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
                            <h3>Mondays 2pm - 5pm</h3>
                        </div>
                        <hr></hr>
                        <div className="classListing">
                            <h2>Class 1</h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
                            <h3>Mondays 2pm - 5pm</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10">
                        <div className="classesPic1">
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}