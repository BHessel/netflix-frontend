import './App.css';
import Navbar from './Navbar.js'
import SignUp from './SignUp.js'
import background from './images/watchSmall.jpg'
import {
  Route, Switch
} from "react-router-dom";
import Login from './login'
import AccountHome from './account'
import showTrailer from './showTrailer'
import showMatches from './showMatches'
import mainContainer from './mainContainer'
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
          <Route exact path ="/" component={mainContainer}/>
          <Route exact path ="/login" component={Login}/>
          <Route exact path='/account' component={AccountHome}/>
          <Route exact path='/trailers' component={showTrailer}/>
          <Route exact path='/matches' component={showMatches}/>
        </Switch>
      </>
    );
  }
}
