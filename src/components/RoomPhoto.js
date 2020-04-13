import React, { Component } from "react"
import {Link} from "react-router-dom";
import styled from "styled-components"
import {ButtonContainer} from "./Button";
import {Jumbotron} from "reactstrap";
export default class RoomPhoto extends Component {
    render() {
        return (
            <Jumbotron>
         <div className="container">
             <img src="https://images.squarespace-cdn.com/content/v1/55365fbae4b0d3e16f0b50ed/1453386856191-RCPZAJF73JQQGT62DUKS/ke17ZwdGBToddI8pDm48kDUimaPXa6_I7F5xSqg33TxZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIxHBzsrDDcZFaRFvxLUaJHP5l7c_vxEnik5ew1TyYDm0/image-asset.png?format=1500w" alt="bk" fluid></img>
         </div>
         </Jumbotron>
        );
    }
}

