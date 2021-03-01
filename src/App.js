import './App.css';
import Navbar from './Navbar.js'
import SignUp from './SignUp.js'
import Footer from './Footer.js'
import background from './images/watchSmall.jpg'
import {
  Route, Switch
} from "react-router-dom";
import Login from './login'
import AccountHome from './account'
import showTrailer from './showTrailer'
import showMatches from './showMatches'
import React, { Component } from 'react'


const userURL = 'http://localhost:3000/users'
const trailerURL = 'http://localhost:3000/trailers'
export default class App extends Component {
  
  state = {
    users: [],
    trailers: []
  }
  
  componentDidMount(){
    Promise.all([
      fetch(userURL).then(res => res.json()),
      fetch(trailerURL).then(res => res.json())
    ]).then(([userURLData, trailerURLData]) => {
      this.setState({
        users: userURLData,
        trailers: trailerURLData
      })
    })
  }
  

  render() {
    return (
      <>
      <Navbar />
        <Switch>
          <div className="App" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <Route exact path ="/" component={SignUp}/>
          <Route exact path ="/login" component={Login}/>
          <Route exact path='/account' component={AccountHome}/>
          <Route exact path='/trailers' component={showTrailer}/>
          <Route exact path='/matches' component={showMatches}/>
          </div>
        </Switch>
      <Footer />
      </>
    );
  }
}
