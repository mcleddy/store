import React, { Component } from "react";
import { Jumbotron } from "reactstrap"
import Email from "./Email"
export default class Home extends Component {
    render() {

        return (
            <React.Fragment>

                <div className="home-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-title">
                                <h1 id="home-title">Welcome To creations in clay</h1>
                            </div>
                            <div className="tagline"><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem</h3></div>
                        </div>
                    </div>
                </div>
                <div className="home-featured-container">
                    <div className="row align-items-center">
                        <div className="col-12 ">
                            <h1 className="aboutUsTitle">About Us</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2>"Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",</h2>
                       <h2 className="cite">-Founder & Lead Instructor</h2>
                        </div>
                    </div>
                </div>

                <div className="home-about-container">
                    <div className="row">
                        <div className="col-12">
                        </div>
                    </div>
                </div>

                <div className="home-email-container">
                    <div className="row">
                        <div className="col-12">
                   <div className="email">      <h1 className="text-title"><i class="fas fa-bullhorn"></i>Be the first to hear from us</h1>
                           </div>    
                           <Email />
                        </div>
                    </div>
                </div>

                <div className="home-instagram-container">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="instagram">  <h1 className="instangram text-title"><i class="fab fa-instagram"></i>follow us</h1> <h2>@creationsinclay</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        );
    }
}
