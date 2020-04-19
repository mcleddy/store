import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <polygon class="svg--lg" fill="white" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />
                <div className="row">
                    <div className="col-12">
                        <p>2020 &copy; Mary Leddy</p>
                    </div>
                </div>
            </div>
        );
    }
}