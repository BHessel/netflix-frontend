import './App.css';
import Navbar from './Navbar.js'
import SignUp from './SignUp.js'
import Footer from './Footer.js'
import background from './images/watchSmall.jpg'
import {
  Route, Switch
} from "react-router-dom";
import Login from './login'
import About from './about'
import Contact from './contact'
import Account from './account'
import match from './match'
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
  //make this a trailer fetch?

  render() {
    return (
      <>
      <Navbar />
        <Switch>
          <div className="App" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <Route exact path ="/" component={() => <SignUp />}/>
          <Route exact path ="/login" component={Login}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/account' component={Account}/>
          <Route exact path='/match' component={match}/>
          </div>
        </Switch>
      <Footer />
      </>
    );
  }
}