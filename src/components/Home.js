import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { changeUserLocation } from './searchbarSlice'
import Card from './Card'

export default function Home() {

    const dispatch = useDispatch()

    const [location, setLocation] = useState('')

    const [submitted, setSubmitted] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(location)
        dispatch(changeUserLocation(location))
        setSubmitted(true)
    }

    const handleChange = e => {
        setLocation(e.target.value)
        console.log(location)
    }

    return (
        <div className="container mx-auto py-8">
            <form onSubmit={handleSubmit}>
                <input className="text-gray-400 w-full h-16 rounded-2xl mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg bg-opacity-50 bg-gray-700" type="text" value={location} onChange={handleChange} placeholder="Search by Zip Code" />
                
            </form>
            {submitted ? <Card /> : null} 
        </div>

    )
}

