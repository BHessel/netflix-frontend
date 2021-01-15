import React from 'react'

export default function Navbar() {
    return (
       
        <nav class="bg-black dark:bg-gray-800 shadow">
            <div class="container mx-auto px-6 py-3">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="flex justify-between items-center">
                        <div class="text-xl font-semibold text-gray-700">
                            <a class="text-gray-700 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-600 dark:hover:text-gray-300" href="/">Netflix Movie Matcher</a>
                        </div>
                
                        <div class="flex md:hidden">
                            <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    

                
                        <div class="hidden md:flex md:items-center md:justify-between flex-1">
                            <div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                                <a href="/about" class="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm text-gray-700 dark:text-gray-200 font-medium rounded-md hover:bg-gray-400 dark:hover:bg-gray-700">About</a>
                                <a href="/contact" class="mx-2 mt-2 md:mt-0 px-2 py-1 text-sm text-gray-700 dark:text-gray-200 font-medium rounded-md hover:bg-gray-400 dark:hover:bg-gray-700">Contact</a>
                            </div>

                            <div class="flex items-center mt-4 md:mt-0">
                                <button type="button" class="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                    
                                    <a href="/login" class="mx-2 mt-2 md:mt-0 px-2 py-1 text-md bg-gray-400 text-gray-700 dark:text-gray-100 font-medium rounded-md hover:bg-gray-500 dark:hover:bg-gray-700">Login</a>
                                    
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}
