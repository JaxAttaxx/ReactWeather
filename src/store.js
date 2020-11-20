import { configureStore } from '@reduxjs/toolkit'
import userLocationReducer from './components/searchbarSlice.js'
import weatherLocationReducer from './components/weatherSlice.js'

export default configureStore({
    reducer: {
        userLocation: userLocationReducer,
        weatherLocation: weatherLocationReducer
        
    }
})