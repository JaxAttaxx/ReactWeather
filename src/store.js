import { configureStore } from '@reduxjs/toolkit'
import userLocationReducer from './components/searchbarSlice.js'

export default configureStore({
    reducer: {
        userLocation: userLocationReducer
        
    }
})