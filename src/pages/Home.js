import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`{
    .filpost{
        height:95vh;
        background: #fff;
        border: 1px solid rgba(0,0,0,.125);

        h2{
            text-align: left;
            font-weight: bold;
        }
    }

    .sendPost{
        text-align: left;
        margin-top: 25px;
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
                <div class="field">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="Search"/>
                        <span className="icon is-small is-left">
                        <i className="fas fa-search"></i>
                        </span>
                    </p>
                </div>
                </div>
                <div className="column is-one-third filpost">
                    <h2>What's happening</h2>
                    <div className="sendPost">    
                        <div className="field">
                            <p className="label">Post :</p>
                            <div className="control">
                                <textarea className="textarea" placeholder="Send your post"></textarea>
                            </div>
                        </div>
                        <div class="field is-grouped is-grouped-right">
                            <div class="control">
                                <button class="button is-link">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Home