import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarPage() {
    return (
        <>
            <nav className="bg-gray-700 mt-5 ml-20 mr-20 flex justify-center rounded-2xl bg-opacity-50">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>



                                
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">

                            </div>

                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">

                                    <Link className="px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:text-white hover:bg-green-400" to="/">Home</Link>
                                    <Link className="px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:text-white hover:bg-green-400" to="/multiday">Multiday</Link>
                                    <Link className="px-3 py-2 rounded-md text-lg font-medium text-gray-300 hover:text-white hover:bg-green-400" to="/hourly">Hourly</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">



                            <div className="ml-3 relative">




                            </div>
                        </div>
                    </div>
                </div>






            </nav>
        </>
    )
}
