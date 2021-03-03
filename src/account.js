import React, { Component } from 'react'
import {
    Link, Route
  } from "react-router-dom";
  import FriendSearch from './FriendSearch'

export default class Account extends Component {

state = {
    searchedUser: ""
}

userSearch = (e) => {
    let searchedUser = e.target.value.toLowerCase()
    //1-GOOD - make sure I have user props here
    //2 if the state of user.username.toLowerCase() includes e.target.value.toLowerCase()
    if(this.props.users[0].username.toLowerCase() === searchedUser){
        this.setState({ searchedUser })}
    //3setState of searchedUsers to match the search, copying OG state (spread op)
    
    //once button is clicked, pass searchedUsers down as this.state.searchedUsers
    //this works because the username acts as a uniqueID here once I put in validations, don't need to send the actual ID down (repetetive)
    //FriendSearch is a display page, showing a list of each user, with the option to CREATE PARTNERSHIP, OR, return to account home
    //I can focus on displaying friendship in accthome later, let's get that partnership initiated first to prove relationship can be made in DB
}
    
    render() {
        return (
            <>
                <div className="userSearch">
                    <label for="friend-search">Find Your Friends:</label>
                    <input type="search" id="friend-search" onChange={(e) => this.userSearch(e)}></input>
                    <button><Link to="/FriendSearch" render={() => <FriendSearch searchedUsers={this.state.searchedUser} />}>Search</Link></button>
                </div>
                <div className="friendList">
                    <ul>
                        <li>Friend 1</li>
                        <li>Friend 2</li>
                    </ul>
                </div>
            </>
        )
    }
}
