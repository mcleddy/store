import React, { Component } from "react"
import {Link} from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components"
import {ButtonContainer} from "./Button";

export default class Navbar extends Component {
    render() {
        return (
         <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            { /* 
            https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}
            <Link to="/">
            <i className="fas fa-baby-carriage" id="baby-carraige"/>
            </Link>

            <Link to="/cart" className="ml-auto" id="nav-cart-btn">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus"/>
                    </span>
                    My cart
                </ButtonContainer>
            </Link>
         </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
padding-top: 25px;
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize !important;

}
#nav-cart-btn{
    
}
#baby-carraige{
    color: var(--mainWhite);
    font-size: xx-large
}

`