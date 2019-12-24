import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

import Article from "../component/Article"
import Post from "../component/Post"
import SearchBar from "../component/SearchBar"

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
    }

    h2{
        text-align: left;
    }

    .article{
        width: 30%;
        margin: 35px;
    }

    .sendPost{
        text-align: left;
        margin-top: 25px;
    }

    .filcenter{
        height:100%;
        margin: 0 10px;
        background: #fff;
        border: 1px solid rgba(0,0,0,.125);

        .recommended{
            margin-top: 25px;
            height: 300px;
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
            this.setState({
                messages: res.data.posts,
                article: res.data.article
            });
          })
      }

    render(){
        return(
            <Wrapper className="columns">

                {/*Sous ce commentaire partie centrale de la page home */}

                <div className="column filcenter">
                    <SearchBar />
                <div>
                    <h2 className="title is-5">Latest pieces</h2>
                    <div className="columns">
                        {this.state.article.map(art =>{
                            return(
                                <Article 
                                    className="article" 
                                    key={art.id} 
                                    author={art.author} 
                                    title={art.title} 
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="recommended">
                    <h2 className="title is-5">Recommended</h2>
                    <div className="columns">
                        {this.state.article.map(art =>{
                            return(
                                <Article 
                                    className="article" 
                                    key={art.id} 
                                    author={art.author} 
                                    title={art.title} 
                                />
                            )
                        })}
                    </div>
                </div>
                </div>

                {/*Sous ce commentaire partie droite de la page home */}

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
                                <Post 
                                    key={mess.id} 
                                    firstName={mess.firstName}
                                    lastName={mess.lastName}
                                    post={mess.post}
                                />
                            )
                        })}
                    </div>
                </div>
            </Wrapper>
        )
    }
}

export default Home