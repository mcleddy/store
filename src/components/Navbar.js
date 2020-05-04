import React, { Component } from "react"
import { Link } from "react-router-dom";
import styled from "styled-components"
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
    render() {

        return (

            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/" className="ml-auto" id="home">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-home" />
                        </span>
                            Home
                        </ButtonContainer>
                </Link>
                <div className="navItems">


                    <Link to="/products" className="ml-auto" id="store">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-store" />
                            </span>
                    Our Shop
                </ButtonContainer>
                    </Link>



                    <Link to="/classes" className="ml-auto" id="store">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-store" />
                            </span>
                    Classes
                </ButtonContainer>
                    </Link>

                </div>
                <Link to="/cart" className="ml-auto" id="nav-cart-btn">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
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

z-index: 2;
margin-top: 0px;
width:100%;
.navItems{
    align-items: left !important; 
}

.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize !important;
    float: right;
}
#store{
    color: var(--mainWhite);
    font-size: xx-large;
    width:150px !important!;    
    float: left;
}

button{
border-color: var(--mainBlue)
}

#home{
    text-align:left
    width: 150px;
    margin-left: 50px !important;
}

`