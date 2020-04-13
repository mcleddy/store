import React, { Component } from "react";
import Navbar from "./Navbar"
export default class Classes extends Component {
    render() {
        return (

            <div className="container">

                <div className="row">
                    <div className="col-12 classesTitle">
                        <h1 className="text-title">Our Classes</h1>
                        <h1>__</h1>
                    </div>
                    <h3>All levels welcome! Whether you are a beginner or experienced potter, these classes give you the freedom to create custom functional or sculptural pieces. Individual instruction allows students to learn the basics of ceramics as well as refine current skills. Wheel throwing, hand building, glazing and surface design are covered.  Equipment, tools, glazing and firing are included. Clay may be purchased int the studio at competitive rates.</h3>
                </div>

                <div className="row">
                    <div className="announcements">
                        <div className="col-4">
                            <h3>Announcements</h3>
                            <hr></hr>
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
                        <div className="classListing">
                            <h2>Class 1</h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
                            <h3>Mondays 2pm - 5pm</h3>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="classListing">
                            <h2>Class 1</h2>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
                            <h3>Mondays 2pm - 5pm</h3>
                        </div>
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
            </div>
        );
    }
}