import React, { Component } from 'react'
import background from './images/watchSmall.jpg'
import SignUp from './SignUp.js'

export default class mainContainer extends Component {
    render() {
        return (
            <div className="backgroundImage" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <SignUp />
            </div>
        )
    }
}

//the logic behind this should ultimately say if logged in, mainContainer goes to login.js, if not, sign up in main container