import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: false,
    reducers: {
        isLogin: (state, action) => {
            return state = action.payload
        }
    },
})

export const { isLogin } = loginSlice.actions

export default loginSlice.reducer