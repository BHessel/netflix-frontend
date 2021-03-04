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
                    <button>Add to Friend List</button> 
                </div>
                
                <div className="return-btn">
                    <button>Return to Account Home</button>
                </div>
            </>
        )
    }
}


//state needs to know
//createPartnership = () => {
//let partnership = {
//partner1_id: (need access to currentUser's ID here), partner2_id: {this.props.location.state.searchedUser[0].id}    
//}
// fetch (local/parnterships, { method: "POST", headers: {}, body{})
//.then(r=>r)
//.then set state pf created
//
//    
//}
