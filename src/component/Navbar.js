import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

import PostModal from "./PostModal"

const Nav = styled.aside`
    width: 20%;
    background: #fff;
    height: 95vh;
    margin-top: 10px;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 5px;

    ul{
        border-top: 1px solid rgba(0,0,0,.125);
        border-bottom: 1px solid rgba(0,0,0,.125);
    }

    a{
        color: black;
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
    state={
        modalVisible: false
    }

    handleClick = () => {
        this.setState({
          modalVisible: !this.state.modalVisible
        });

        console.log(this.state)
    };

    render(){

        let modal;

        if (this.state.modalVisible) {
        modal = <PostModal cache={this.handleClick} visible={this.state.modalVisible}/> ;
        }

        return(
            <Nav className="menu">
                <Link to="/"><h1 className="is-title is-1">Page-experience</h1></Link>
                <Link to="/MyProfile">
                    <p className="control">
                        <button className="button is-light">
                        <i className="fas fa-user"/>   Profile
                        </button>
                    </p>
                </Link>
                <p className="control" onClick={this.handleClick}>
                    <button className="button is-light">
                    <i className="fas fa-plus"/>   Create
                    </button>
                </p>
                <ul className="menu-list is-link">
                <li>
                    <Link to="/"><i className="fas fa-home"/>Home</Link>  
                </li>
                <li>
                    <Link><i className="fas fa-file-alt"/>Journals</Link>  
                </li>
                <li>
                    <Link><i className="fas fa-bell"/>Notifications</Link>  
                </li>
                </ul>
                {modal}
            </Nav>

        )
    }
}

export default Navbar