import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarPage() {
    return (
        <>
            <nav class="bg-gray-700 mt-5 ml-20 mr-20 flex justify-center rounded-2xl bg-opacity-50">
                <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>



                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>



                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex-shrink-0 flex items-center">

                            </div>

                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex space-x-4">

                                    <a href="#" class="px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:text-white hover:bg-green-400"><Link to="/">Home</Link></a>
                                    <a href="#" class="px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:text-white hover:bg-green-400"><Link to="/multiday">Multiday</Link></a>
                                    <a href="#" class="px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:text-white hover:bg-green-400"><Link to="/hourly">Hourly</Link></a>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">



                            <div class="ml-3 relative">




                            </div>
                        </div>
                    </div>
                </div>






            </nav>
        </>
    )
}
