import React, { Component } from "react"
import Navbar from "./Navbar"
import styled from "styled-components"


const Wrapper = styled.div`
    padding: 10px;

`;

const Child = styled.div`{
    display: block;
}`

class Layout extends Component {
    render(){
        const {children} = this.props
        return(
            <Wrapper className="columns">
                <Navbar className="column is-one-quarter" />
                <Child className="column is-three-quarter">{children}</Child>
            </Wrapper>

        )
    }
}

export default Layout