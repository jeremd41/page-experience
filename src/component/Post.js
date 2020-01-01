import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    width:100%;
    height: auto;
    border-bottom: 1px solid #DCD5D4;
    position: relative;
    padding: 10px;

    .userName{
        font-weight: bold;
        margin-bottom: 5px;
    }

    a{
        color: black;
        padding: 2px;

        :hover{
            border-radius: 2px;
            background: #DCD5D4;
        }
    }

    footer{
        display: flex;
        justify-content: flex-end;
        margin-top 10px;
    }

    footer a{
        margin: 0 15px;
    }

`;

export default function Post(props){
    return(
    <Wrapper>
        <p className="userName is-6">{props.firstName + ""+ props.lastName}</p>
        <p>{props.post}</p>
        <footer>
            <a href="#">Reply</a>
            <a href="#">Like</a>
            <a href="#">More</a>
        </footer>
    </Wrapper>
    )
}