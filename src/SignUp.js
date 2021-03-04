import React, { Component } from 'react'

export default class SignUp extends Component {

  state = {
    username: "",
    password: "",
    partner_id: "",
    created: false,
    errorMessage: ""
  }

  handleUserChange = (e) => {
    console.log(e)
    let username = e.target.value
    this.setState({ username })
  }
  
  handlePasswordChange = (e) => {
    console.log(e)
    let password = e.target.value
    this.setState({ password })
  }

  createUser = (e) => {
    e.preventDefault();
    e.target.reset();
    const { username, password, partner_id } = this.state

    let user = {
      username: username,
      password: password,
      partner_id: partner_id
    }

    let requestPackage = {
      method: "POST",
      headers: {"Content-Type": "application/json", Accept: "application/json"},
      body: JSON.stringify({ user })
    }
    
    fetch("http://localhost:3000/users", requestPackage)
      .then((res) => res.json())
      .then((response) => console.log(response)) 
  }

  render() {
    return (
      <div>
        <div className="h-screen font-sans bg-cover">
          <div className="container flex items-center justify-end flex-1 h-full mx-auto">
        
            <form className="absolute right-0 max-w-sm p-10 m-4 bg-white bg-opacity-25 rounded shadow-xl top-10 h-50 w-50" onSubmit={this.createUser}>
                <p className="text-lg font-bold text-center text-white">Get Started</p>
                  
                  <div className="">
                    <label className="block text-sm text-white" for="email">Username</label>
                    <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                      type="username"
                      id="username" 
                      placeholder="Username"
                      aria-label="username"
                      required
                      onChange={this.handleUserChange}                      
                    />
                  </div>
                  
                  <div className="mt-2">
                    <label className="block text-sm text-white">Password</label>
                    <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                      type="password"
                      id="password"
                      placeholder="Password"
                      arial-label="password"
                      required
                      onChange={this.handlePasswordChange}
                    />
                  </div>

                  <div className="flex items-center justify-center mt-4">
                    <a href="/account">
                      <button className="px-4 py-1 font-light tracking-wider text-white bg-gray-900 rounded hover:bg-gray-800"
                      type="submit">Create Account
                      </button>
                    </a>
                  </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}
