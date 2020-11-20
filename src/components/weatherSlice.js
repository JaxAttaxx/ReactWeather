import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    weatherLocation:''
}
const weatherLocationSlice = createSlice({
    name: 'weatherLocation',
    initialState,
    reducers: {
        changeWeatherLocation(state, action) {
            state.weatherLocation = action.payload
        }
    }
})
export const { changeWeatherLocation } = weatherLocationSlice.actions
export default weatherLocationSlice.reducer
