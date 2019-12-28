import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    width:100%;

    footer{
        float:right;
    }

    footer a{
        margin: 0 15px;
    }

`;

export default function Post(props){
    return(
    <Wrapper className="post box">
        <p className="title is-6">{props.firstName + ""+ props.lastName}</p>
        <p>{props.post}</p>
        <footer>
            <a href="#">Reply</a>
            <a href="#">Like</a>
            <a href="#">More</a>
        </footer>
    </Wrapper>
    )
}