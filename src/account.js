import React, { Component } from 'react'

export default class Account extends Component {
    render() {
        return (
            <>
                <div className="userSearch">
                    <label for="friend-search">Find Your Friends:</label>
                    <input type="search" id="friend-search"></input>
                    <button>Search</button>
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
