import React, { Component } from "react"

export default function SearchBar(){
    return(
        <div class="field">
            <p className="control has-icons-left">
                <input className="input" type="text" placeholder="Search"/>
                <span className="icon is-small is-left">
                <i className="fas fa-search"></i>
                </span>
            </p>
        </div>
    )
} 