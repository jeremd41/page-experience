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

                {/*Sous ce commentaire partie centrale de la page Profile */}

                <div className="column filcenter">
                    <SearchBar />
                </div>

                {/*Sous ce commentaire partie droite de la page Profile */}

                <div className="column is-one-third filpost">
                
                </div>
            </Wrapper>
        )
    }
}

export default Home