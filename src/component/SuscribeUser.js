import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`{
    margin: 5px;
    height: auto;

    h3{
        font-weight: bold;
        margin:0;
    }

    p{
        font-size: 14px;
    }

    .btn-suscribe{
        margin: 10px 0;
    }

}`

export default function SuscribeUser(props){
    return(
        <Wrapper class="field">
            <div className="columns">
                <div className="column is-one-third">
                    <figure className="image is-96x96">
                        <img src="https://bulma.io/images/placeholders/96x96.png"/>
                    </figure>
                </div>
                <div className="column is-two-third">
                    <h3 classNa>{props.name}</h3>
                    <p>{props.fonc}</p>
                    <div className="buttons is-left">
                        <button className="btn-suscribe button is-small is-link is-outlined">Suscribe +</button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
} 