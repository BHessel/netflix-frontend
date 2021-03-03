import React, { Component } from 'react'

export default class FriendSearch extends Component {
    render() {
        return (
            <>
                <div className="fs-header">
                    <h1>Add Friends to Start Matching!</h1>
                    //Map through this array to show a user *IN A UL* with a button to create friendship
                </div>
                <div className="fs-display">
                    //this will be a card that displays the searchedUser
                    <div className="searchedUserName">
                        {this.props.searchedUsers}
                    </div>
                    <button onClick={}>Add to Friends List</button>
                    // THIS CREATES A PARTNERSHIP!!! GET/POST to the backend
                    // go to partnership home (showTrailer)
                    
                </div>
                <div className="return-btn">
                    <button>Return to Account Home</button>
                </div>
            </>
        )
    }
}
