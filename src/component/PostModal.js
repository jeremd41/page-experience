import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.aside`
    width: 60%;
    height: auto;
    background: #fff;
    margin: 25px auto;
    position: absolute;
    top: 45%; 
    left: 50%; 
    transform : translate(-50%,-50%);
    border-top-left-radius: 8px 8px;
    border-top-right-radius: 8px 8px;
    

    .btn-close{
        cursor: pointer;

        :hover{
           color: #fff;
        }
    }

    .bandeauSup{
        background: #DCD5D4;
        padding:12px;
        height: 50px;
        display: flex;
        font-weight: bold;
        font-size: 17px;
        border-top-left-radius: 8px 8px;
        border-top-right-radius: 8px 8px;
        justify-content: space-around;
        

        .bandeauTitle{
            text-align:left;
            flex:4;
        }

        .close{
            flex:1;
            text-align:right;
        }

    }

    form{
        padding: 25px;

        a{
            color: #DCD5D4;
            margin: 10px;
        }

        .buttons{
            margin-top: 30px;
        }
    }

`

class PostModal extends Component{
    render(){
        return(
            <div className="overlay">
                <Wrapper className="container">
                    <div className="bandeauSup">
                        <div className="bandeauTitle">Create a publication</div>
                        <div className="close">
                            <p className="btn-close" onClick={this.props.cache}>X</p>
                        </div>
                    </div>
                    <form className="columns">
                        <div className="column is-2">
                            <figure className="image is-64x64">
                                <img src="https://bulma.io/images/placeholders/64x64.png"/>
                            </figure>
                        </div>
                        <div className="column is-10">
                            <textarea className="textarea" placeholder="Share with the world your latest piece..."></textarea>
                            <div className="columns">
                                <a className="column is-1 icon is-medium">
                                    <i className="far fa-2x fa-image"></i>
                                </a>
                                <a className="column is-1 icon is-medium">
                                    <i className="fas fa-2x fa-map-marker-alt"></i>
                                </a>
                            </div>
                            <div className="control is-pulled-right">
                                <div className="select">
                                    <select>
                                        <option>Public</option>
                                        <option>Private</option>
                                    </select>
                                </div>
                                <div className="buttons">
                                    <button className="button is-link">Publish</button>
                                </div>
                            </div>
                            
                        </div>
                        
                    </form>
                </Wrapper>
            </div>
        )
    }
}

export default PostModal