import React from 'react'

export default function SignUp() {
    return (
    <>
<div class="h-screen font-sans bg-cover">
<div className="container mx-auto h-full flex flex-1 items-center justify-end">
    
      
        <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl absolute top-10 right-0 h-50 w-50">
            <p className="text-white font-medium text-center text-lg font-bold">Get Started</p>
              <div className="">
                <label className="block text-sm text-white" for="email">Username</label>
                <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="username" id="username"  placeholder="Username" aria-label="username" required/>
              </div>
              <div className="mt-2">
                <label className="block  text-sm text-white">Password</label>
                 <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password" id="password" placeholder="Password" arial-label="password" required/>
              </div>

              <div className="mt-4 items-center flex justify-center">
                
                <a href="/account"><button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit">Create Account</button></a>
              </div>

        </form>
    </div>
    </div>
</>
    )

    
}

