import React, { Component } from 'react'
import background from './images/watchSmall.jpg'
import SignUp from './SignUp.js'
import Account from './Account'

export default class MainContainer extends Component {

    state = {
        partnerships: [],
        currentUserId: 2
    }
    
    componentDidMount(){
        fetch("http://localhost:3000/partnerships")
            .then(res => res.json())
            .then(partnerships => this.setState({
                    partnerships
            }))
    }
    
    
    render() {
        // filterPartnerships = () =>  {
        //     userPartnerships = this.state.partnerships.filter(partnership => partnership.partner1_id || partnership.partner2_id === this.state.currentUserId)
        //     this.setState({
        //         partnerships: userPartnerships
        //     })
        // }
        
        return (
            <div className="backgroundImage" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <SignUp 
                    users={this.props.users}
                />
                <Account
                    users={this.props.users}
                    partnerships={this.state.partnerships}
                    currentUser={this.state.currentUserId}
                />
                
            </div>
        )
    }
}

//the logic behind this should ultimately say if logged in, mainContainer goes to login.js, if not, sign up in main container