import React, { Component } from 'react'
import ReactPlayer from 'react-player'


export default class showTrailer extends Component {
    render() {
        return (
        <div className='container'>
            <div className='dislikeBtn'>
                <button>Dislike</button>
            </div>

            <div className='videoPlayer'>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </div>

            <div className='skipBtn'>
                <button>Skip (Already Seen)</button>
            </div>
            
            <div className='Description'>
                <p>Description:</p>
                <p>placeholder 123</p>
            </div>
            
            
            <div className='likeBtn'>
                <button>Like</button>
            </div>

            
        </div>
    )
}}
