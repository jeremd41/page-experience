import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Nav = styled.aside`
    width: 20%;
    background: #fff;
    height: 95vh;
    border: 1px solid rgba(0,0,0,.125);

    ul{
        border-top: 1px solid rgba(0,0,0,.125);
        border-bottom: 1px solid rgba(0,0,0,.125);
    }

    i{
        margin-right: 10px;
    }

    h1{
        text-align: left;
        margin: 10px;
        text-transform: uppercase;
        font-weight: bold;
    }

    p{
        display: block;
        margin: 0 auto;
        width: 90%;
    }

    button{
        display: block;
        width: 90%;
        margin: 10px auto;;
    }

    li{
        text-align: left;
    }
`;


class Navbar extends Component {
    render(){
        return(
            <Nav className="menu">
                <Link to="/"><h1 className="is-title is-1">Logo</h1></Link>
                <Link to="/MyProfile">
                    <p className="control">
                        <button className="button is-link">
                        <i className="fas fa-user"/>   Profile
                        </button>
                    </p>
                </Link>
                <p className="control">
                    <button className="button is-link">
                    <i className="fas fa-plus"/>   Create
                    </button>
                </p>
                <ul className="menu-list is-link">
                <li className="is-link">
                    <Link to="/"><i className="fas fa-home"/>Home</Link>  
                </li>
                <li>
                    <Link><i className="fas fa-file-alt"/>Journals</Link>  
                </li>
                <li>
                    <Link><i className="fas fa-bell"/>Notifications</Link>  
                </li>
                </ul>
            </Nav>

        )
    }
}

export default Navbar