import './App.css';
import Navbar from './Navbar.js'
import {
  Route, Switch
} from "react-router-dom";
import Login from './Login'
import AccountHome from './Account'
import showTrailer from './showTrailer'
import showMatches from './showMatches'
import MainContainer from './MainContainer'
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
    ]).then(([users, trailers]) => {
      this.setState({ users, trailers })
    })
  }
  

  render() {
    return (
      <>
      <Navbar />
        <Switch>
          <Route exact path ="/" render={() => <MainContainer users={this.state.users} />}/>
          <Route exact path ="/login" component={Login} />
          <Route exact path='/account' component={AccountHome}/>
          <Route exact path='/trailers' component={showTrailer}/>
          <Route exact path='/matches' component={showMatches}/>
        </Switch>
      </>
    );
  }
}
