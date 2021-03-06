import React, {Component} from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Wrapper = styled.div`
    margin: 15px;
    width:100%;
    border: 1px solid #DCD5D4;
    border-radius: 5px;

    .card-image{
        background: lightgrey;
    }

`;

class Article extends Component{
    render(){
        return(
            <Wrapper>
                <Link to={"/article/"+this.props.id}>
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
                </Link>
            </Wrapper>
        )
    }
}

export default Article