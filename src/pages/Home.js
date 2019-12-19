import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

import Article from "../component/Article"

const Wrapper = styled.div`{
    .filpost{
        height:95vh;
        background: #fff;
        border: 1px solid rgba(0,0,0,.125);

        footer{
            float:right;
        }

        footer a{
            margin: 0 15px;
        }

        h2{
            text-align: left;
            font-weight: bold;
        }

        .post{
            border-radius: none;
            border-top: 1px solid #222;
            height: 40%;
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
        
        .article{
            position:relative;
            width: 30%;
            margin: 15px;
        }
    }
}`

class Home extends Component {

    state={
        messages:[],
        article:[]
    }

    componentDidMount() {
        axios.get(`./db.json`)
          .then(res => {
            console.log(res.data)
            this.setState({
                messages: res.data.posts,
                article: res.data.article
            });
          })
          
      }

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
                <div>
                    <h2>Latest pieces</h2>
                    <div className="columns">
                        {this.state.article.map(art =>{
                            return(
                                <Article 
                                    className="column article is-one-quarter" 
                                    key={art.id} 
                                    author={art.author} 
                                    title={art.title} 
                                />
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h2>Recommended</h2>
                    <div className="columns">
                        {this.state.article.map(art =>{
                            return(
                                <Article 
                                    className="column article is-one-quarter" 
                                    key={art.id} 
                                    author={art.author} 
                                    title={art.title} 
                                />
                            )
                        })}
                    </div>
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
                        {this.state.messages.map(mess =>{
                            return(
                            <div key={mess.id} className="post box">
                                <p className="title is-6">{mess.firstName + ""+ mess.lastName}</p>
                                <p>{mess.post}</p>
                                <footer>
                                    <a href="#">Reply</a>
                                    <a href="#">Like</a>
                                    <a href="#">More</a>
                                </footer>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Home