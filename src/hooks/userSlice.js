import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        userData: (state, action) => {
            state.push(action.payload)
        }
    },
})

export const { userData } = userSlice.actions

export default userSlice.reducer