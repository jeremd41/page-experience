import React, {Component} from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    padding: 10px;
    width:100%;
    border: 1px solid #111;

    .art{
        width: 30%;
    }

`;

class Article extends Component{
    render(){
        return(
            <Wrapper>
                <div className="">
                    <div className="">
                        <figure class="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/256x256.png"/>
                        </figure>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Article