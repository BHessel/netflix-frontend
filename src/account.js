import React from 'react'

export default function account() {
    return (
        <>
        <div>
            <button>See Current Movie Partners</button>
        </div>
        <div>
            <h2>Hi (NAME)!</h2>
            <p>Enter your movie partner's username below to begin voting on previews together:</p>
            <input type='text' placeholder='Username' />
        </div>
        <div>
            <h2>What Genres Do You Enjoy Watching?</h2>
            <input type="checkbox" id='Documentaries'/>
            <label for='Documentaries'>Documentaries</label>
        </div>
        </>
    )
}
