import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`{
    .filpost{
        height:95vh;
        background: #fff;
        border: 1px solid rgba(0,0,0,.125);
    }

    .filcenter{
        height:95vh;
        margin: 0 10px;
        background: #fff;
        border: 1px solid rgba(0,0,0,.125);   
    }
}`

class Home extends Component {
    render(){
        return(
            <Wrapper className="columns">
                <div className="column filcenter">

                </div>
                <div className="column is-one-quarter filpost">
                    <div></div>
                </div>
            </Wrapper>
        )
    }
}

export default Home