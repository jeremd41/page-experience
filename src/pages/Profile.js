import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"

import SearchBar from "../component/SearchBar"
import Article from "../component/Article"
import SuscribeUser from "../component/SuscribeUser"

const Wrapper = styled.div`{

    h2{
        text-align:left;
        margin: 5px 0;
        font-weight: bold;
        font-size: 1.2rem;
    }

    a{
        color: black;
        padding: 2px;

        :hover{
            border-radius: 2px;
            background: #DCD5D4;
        }
    }

    h4{
        text-align: left;
        font-weight: bold;
    }

    h3{
        text-align: left;
    }

    h6{
        text-align:left
    }

    p{
        text-align: left;
    }

    .article{
        width: 30%;
        margin: 35px;
    }

    .filpost{
        margin-top: 10px;
        height:95vh;
        background: #fff;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: 5px;

    }

    .filcenter{
        height:100%;
        margin: 0 10px;

        .center{
            padding: 10px;
            background: #fff;
            border: 1px solid #DCD5D4;
            border-radius: 5px;
        }

        .works{
            margin-top: 10px;
            padding: 10px;
            background: #fff;
            border: 1px solid #DCD5D4;
            border-radius: 5px;

            h3{
                padding: 5px;
                text-align: left;
                border-bottom: 1px solid #DCD5D4;
            }
        }

        .comment{
            padding: 20px 25px;
            border-top: 1px solid #DCD5D4;
        }

        footer{
            float:right;
        }

        footer a{
            margin: 0 15px;
        }
    }
}`

class MyProfile extends Component {

    state={
        users:[],
        article:[]
    }

    componentDidMount() {
        axios.get(`./db.json`)
          .then(res => {
            this.setState({
                users: res.data.users,
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
                    <div className="center">
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <figure className="image is-128x128">
                                    <img className="image-rad" src="https://bulma.io/images/placeholders/128x128.png"/>
                                </figure>
                            </div>
                            <div className="column is-three-quarter">
                                <h2 className="is-4">Nom Prénom</h2>
                                <p>Magna laboris sit deserunt duis irure nostrud et.Magna laboris sit deserunt duis irure nostrud et.Magna laboris sit deserunt duis irure nostrud et.</p>
                                <h6><i className="fas fa-map-marker-alt"/> Localisation</h6>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="columns">
                                <div className="column is-one-quarter">
                                    <figure className="image is-64x64">
                                        <img className="image-rad" src="https://bulma.io/images/placeholders/64x64.png"/>
                                    </figure>
                                </div>
                                <div className="column is-three-quarter">
                                    <h4>Nom Prénom      .date</h4>
                                    <p>Irure pariatur sint et do adipisicing dolore amet.Sunt aliquip amet occaecat nulla consectetur anim laborum anim incididunt est.</p>
                                    <footer>
                                        <a href="#">React</a>
                                        <a href="#">More</a>
                                    </footer>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="works">
                        <h3 className="title is-5">Works</h3>
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

                {/*Sous ce commentaire partie droite de la page Profile */}

                <div className="column is-one-third filpost">
                    <h3 className="title is-5">Recommended</h3>
                    {this.state.users.map(us =>{
                                return(
                                    <SuscribeUser 
                                        className="" 
                                        key={us.id} 
                                        name={us.name}
                                        fonc={us.fonction}
                                    />
                                )
                    })}
                </div>
            </Wrapper>
        )
    }
}

export default MyProfile