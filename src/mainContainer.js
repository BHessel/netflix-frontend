import React, { Component } from 'react'
import background from './images/watchSmall.jpg'
import SignUp from './SignUp.js'
import Account from './Account'
export default class MainContainer extends Component {
    render() {
        return (
            <div className="backgroundImage" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                {/* <SignUp /> */}
                <Account
                    users={this.props.users}
                />
            </div>
        )
    }
}

//the logic behind this should ultimately say if logged in, mainContainer goes to login.js, if not, sign up in main container