import React from 'react'
import ReactPlayer from 'react-player'


export default function match() {
    return (
        <div className='container'>
            <div className='dislikeBtn'>
                <button>Dislike</button>
            </div>

            <div className='videoPlayer'>
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </div>

            <div className='likeBtn'>
                <button>Like</button>
            </div>

            
        </div>
    )
}
