import React, { Component } from 'react'

export default class FriendSearch extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>Add Friends to Start Matching!</h1>
                    //if userMatch=this.props.users set to lower case includes usersearch set to lower case, this.setstate of searchedUsers to userMatch
                    //Map through this array to show a user *IN A UL* with a button to create friendship
                </div>
                <div>
                    <button>Return to Account Home</button>
                </div>
            </>
        )
    }
}
