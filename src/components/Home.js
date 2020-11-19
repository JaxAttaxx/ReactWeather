import React, { useState } from 'react'
import {
    Redirect
} from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux'
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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={location} onChange={handleChange} placeholder="Loc search" />
                <input type="Submit" />
            </form>
            {submitted ? <Card /> : null} 
        </div>

    )
}
