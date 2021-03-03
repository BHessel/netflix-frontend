import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
  import FriendSearch from './FriendSearch'

export default class Account extends Component {

    state = {
        searchedUser: ""
    }

    userSearch = (e) => {
        let usernameSearch = e.target.value.toLowerCase()
        let searchedUser = this.props.users.filter(user => user.username.toLowerCase() === usernameSearch)
        this.setState({ searchedUser })
    }
        
        //once button is clicked, pass searchedUsers down as this.state.searchedUsers
        //this works because the username acts as a uniqueID here once I put in validations, don't need to send the actual ID down (repetetive)
        //FriendSearch is a display page, showing a list of each user, with the option to CREATE PARTNERSHIP, OR, return to account home
        
    handleSearch = () => {
        
    }
    
    render() {
        return (
            <>
                <div className="userSearch">
                    <label for="friend-search">Find Your Friends:</label>
                    <input type="search" id="friend-search" onChange={(e) => this.userSearch(e)}></input>
                    <button>
                        <Link to={
                            {
                                pathname: "/FriendSearch",
                                state: {
                                    searchedUser: this.state.searchedUser
                                }
                            }
                        }>Search</Link>
                    </button>
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