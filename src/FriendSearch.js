import React, { Component } from 'react'

export default class FriendSearch extends Component {

    state = {
        partnership: false,
        partner1_id: 1,
        partner2_id: ""
    }

    createPartnership = (e) => {
        e.preventDefault();
        
        let partnership = {
            partner1_id: 1,
            partner2_id: this.props.location.state.searchedUser[0].id,
            partner1_approval: "",
            partner2_approval: "",
            trailer_id: ""
        }

        let requestPackage = {
        method: "POST",
        headers: {"Content-Type": "application/json", Accept: "application/json"},
        body: JSON.stringify({ partnership })
        }
        
        fetch('http://localhost:3000/partnerships', requestPackage)
            .then((r) => r.json())
            .then((resp) => console.log(resp))
    }
    
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
                    <button type="submit" onClick={this.createPartnership}>Add to Friend List</button> 
                </div>
                
                <div className="return-btn">
                    <button>Return to Account Home</button>
                </div>
            </>
        )
    }
}