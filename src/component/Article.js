import React, {Component} from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    margin: 15px;
    width:100%;

    .card-image{
        background: lightgrey;
    }

    .art{
        width: 30%;
    }

`;

class Article extends Component{
    render(){
        return(
            <Wrapper>
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-128x128">
                            <img src="https://bulma.io/images/placeholders/256x256.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media-content">
                            <p class="title is-6">{this.props.title}</p>
                            <p class="subtitle is-6">By {this.props.author}</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Article