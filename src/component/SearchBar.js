import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    background: #fff;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 5px;

`;

export default function SearchBar(){
    return(
        <Wrapper className="field">
            <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Search"/>
                <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
                </span>
            </p>
        </Wrapper>
    )
} 