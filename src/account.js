import React, { Component } from 'react'


export default class account extends Component {

    render() {
    return (
        <>
            <div className="userSearch">
                <h2>Find a User</h2>
                <div className="relative pt-2 mx-auto text-gray-600">
                    <input className="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none" type="search" name="search" placeholder="Search">
                    </input>
                    <button type="submit" className="absolute top-0 right-0 mt-5 mr-4">
                    </button>
                </div>
            </div>
            
            <div className="currentMatches">
                <h2>Current Matches</h2>
            </div>
        </>
        )
    }
}
