import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
  import FriendSearch from './FriendSearch'

export default class Account extends Component {
    render() {
        return (
            <>
                <div className="userSearch">
                    <label for="friend-search">Find Your Friends:</label>
                    <input type="search" id="friend-search" onChange={(e) => this.props.userSearch(e)}></input>
                    <button><Link to="/FriendSearch" render={() => <FriendSearch users={this.props.users} />}>Search</Link></button>
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
