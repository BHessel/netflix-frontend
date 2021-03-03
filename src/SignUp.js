import React from 'react'

export default function SignUp() {
    return (
    <>
<div className="h-screen font-sans bg-cover">
<div className="container flex items-center justify-end flex-1 h-full mx-auto">
    
      
        <form className="absolute right-0 max-w-sm p-10 m-4 bg-white bg-opacity-25 rounded shadow-xl top-10 h-50 w-50">
            <p className="text-lg font-bold text-center text-white">Get Started</p>
              <div className="">
                <label className="block text-sm text-white" for="email">Username</label>
                <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" type="username" id="username"  placeholder="Username" aria-label="username" required/>
              </div>
              <div className="mt-2">
                <label className="block text-sm text-white">Password</label>
                 <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                  type="password" id="password" placeholder="Password" arial-label="password" required/>
              </div>

              <div className="flex items-center justify-center mt-4">
                
                <a href="/account"><button className="px-4 py-1 font-light tracking-wider text-white bg-gray-900 rounded hover:bg-gray-800"
                  type="submit">Create Account</button></a>
              </div>

        </form>
    </div>
    </div>
</>
    )

    
}

