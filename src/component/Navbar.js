import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Nav = styled.aside`
    width: 20%;
    background: #fff;
    height: 95vh;
    border: 1px solid rgba(0,0,0,.125);

    li{
        text-align: left;
    }
`;


class Navbar extends Component {
    render(){
        return(
            <Nav className="menu">
                <ul className="menu-list">
                <li>
                    <Link>Home</Link>  
                </li>
                <li>
                    <Link>Journals</Link>  
                </li>
                <li>
                    <Link>Notifications</Link>  
                </li>
                </ul>
            </Nav>

        )
    }
}

export default Navbar