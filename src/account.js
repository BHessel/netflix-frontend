import React, { Component } from 'react'

const trailerURL = "http://localhost:3000/trailers"
export default class account extends Component {

    state = {
        trailers: []
    }

    async componentDidMount() {
        const response = await fetch(trailerURL)
        const trailers = await response.json()
        this.setState({ trailers })
    }

    render() {
    return (
        <>
        <section class="bg-gray-700 dark:bg-gray-800 container mx-auto p-6">
        <h2 class="text-gray-500 dark:text-white font-medium capitalize text-xl md:text-2xl">Current Movie Match Partners</h2>
        <p class="text-gray-500">Click on any partner to continue matching together</p>

        <div class="flex items-center justify-center">
            <div class="grid gap-8 grid-cols-2 mt-8">
                <div class="max-w-xs w-full text-center">
                    <img class="h-48 w-full object-cover object-center mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar"/>

                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-400 dark:text-gray-200">Ahmed Omer</h3>
                        <span class="mt-1 font-medium text-gray-500 dark:text-gray-300">CEO</span>
                    </div>
                </div>

                <div class="max-w-xs w-full text-center">
                    <img class="h-48 w-full object-cover object-center mx-auto rounded-lg" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar"/>

                    <div class="mt-2">
                        <h3 class="text-lg font-medium text-gray-400 dark:text-gray-200">Jane Doe</h3>
                        <span class="mt-1 font-medium text-gray-500 dark:text-gray-300">Co-founder</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="flex flex-col max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden md:flex-row md:h-48">
        <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
            <div class="py-6 px-6 md:px-8 md:py-0">
                <h2 class="text-gray-700 dark:text-white text-lg font-bold md:text-gray-100">Hi <span class="text-red-600 dark:text-red-400 md:text-red-300">(NAME))</span> </h2>
                
                <p class="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-gray-400">Enter your movie partner's username to match and begin voting on previews together:</p>
            </div>
        </div>

        <div class="flex bg-gray-700 items-center justify-center pb-6 md:py-0 md:w-1/2">
            <form>
                <div class="flex flex-col rounded-lg border dark:border-gray-600 overflow-hidden lg:flex-row">
                    <input class="py-3 px-6 bg-white dark:bg-gray-800 text-gray-700 outline-none placeholder-gray-500 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" type="text" name="email" placeholder="Find your movie partner" aria-label="Enter your email"/>
                    
                    <button class="py-3 px-4 bg-gray-700 text-gray-100 text-sm font-medium tracking-wider uppercase hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">search</button>
                </div>
            </form>
        </div>
        
    </div>
        
        <div className='bg-gray-300'>
            <h2>What Genres Do You Enjoy Watching?</h2>
            
            <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked=''/><span class="ml-2 text-gray-700">Documentaries</span>
            </label>
            
            <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked=''/><span class="ml-2 text-gray-700">Action</span>
            </label>

            <label class="inline-flex items-center mt-3">
                <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked=''/><span class="ml-2 text-gray-700">Sci-Fi</span>
            </label>
        </div>
        </>
        )
    }
}
