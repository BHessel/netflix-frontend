import React, { Component } from 'react'

export default class FriendSearch extends Component {
    render() {
        return (
            <>
                <div className="fs-header">
                    <h1>Add Friends to Start Matching!</h1>
                </div>

                <div className="fs-display">
                    <div className="searchedUserName">
                      <p>{this.props.location.state.searchedUser[0].username}</p>
                    </div>
                    <button>Add to Friends List</button> 
                </div>
                
                <div className="return-btn">
                    <button>Return to Account Home</button>
                </div>
            </>
        )
    }
}
