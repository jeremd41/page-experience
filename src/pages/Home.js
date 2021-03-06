import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

import Article from "../component/Article"
import Post from "../component/Post"
import SearchBar from "../component/SearchBar"

const Wrapper = styled.div`{
    .filpost{
        height:auto;


        h2{
            font-weight: bold;
        }
    }

    h2{
        padding: 5px;
        text-align: left;
        border-bottom: 1px solid #DCD5D4;
    }

    h3{
        padding: 5px;
    }

    .article{
        width: 30%;
        margin: 35px;
    }

    .sendPost{
        padding: 10px;
        text-align: left;
        background: #fff;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 5px;
    }

    .userPost{
            padding: 10px;
            margin: 10px 0;
            text-align: left;
            background: #fff;
            border: 1px solid rgba(0,0,0,.125);
            border-radius: 5px;
    }

    .filcenter{
        height:100%;
        margin: 0 10px;
        /*background: #fff;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 5px;*/

        .latest{
            padding: 10px;
            height: 300px;
            background: #fff;
            border: 1px solid rgba(0,0,0,.125);
            border-radius: 5px;
        }

        .recommended{
            padding: 10px;
            margin-top: 10px;
            height: 300px;
            background: #fff;
            border: 1px solid rgba(0,0,0,.125);
            border-radius: 5px;
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
                    <div className="latest">
                        <h2 className="title is-5">Latest pieces</h2>
                        <div className="columns">
                            {this.state.article.map(art =>{
                                return(
                                    <Article 
                                        className="article" 
                                        key={art.id}
                                        id={art.id}
                                        author={art.author} 
                                        title={art.title} 
                                    />
                                )
                            })}
                        </div>
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
                                    id={art.id}
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
                    <div className="sendPost"> 
                        <h2>What's happening</h2>   
                        <div className="field">
                            <h3 className="label">Post :</h3>
                            <div className="control">
                                <textarea className="textarea" placeholder="Send your post"></textarea>
                            </div>
                        </div>
                        <div class="field is-grouped is-grouped-right">
                            <div class="control">
                                <button class="button is-light">Post</button>
                            </div>
                        </div>
                    </div>
                    <div className="userPost">
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