import React, { Component } from "react"
import axios from "axios"

class ViewArticle extends Component{
    state={
        article:[]
    }

    componentDidMount() {
        axios.get(`../db.json`)
          .then(res => {
            this.setState({
                article: res.data.article
            });
          })
    }

    render(){
        let id = this.props.match.params.art_id;

        const filtre = this.state.article.filter(item =>{
            return(item.id == id)
        })

        const result = filtre.map(item =>{
            return(
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <h3>{item.author}</h3>
                    <h3>{item.content}</h3>
                </div>
            )
        })

        return(
            <div>{result}</div>
        )
    }
}

export default ViewArticle