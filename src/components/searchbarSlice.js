import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    userlocation:''
}
const userLocationSlice = createSlice({
    name: 'userLocation',
    initialState,
    reducers: {
        changeUserLocation(state, action) {
            state.userLocation = action.payload
        }
    }
})
export const { changeUserLocation } = userLocationSlice.actions
export default userLocationSlice.reducer
