import { createSlice } from '@reduxjs/toolkit'

export const itemCountSlice = createSlice({
    name: 'itemCount',
    initialState: 1,
    reducers: {
        increment: (state) => {
            return state += 1
        },
        decrement: (state) => {
            if (state === 1) {
                return state
            } else {
                return state -= 1
            }
        },
    },
})

export const { increment, decrement } = itemCountSlice.actions

export default itemCountSlice.reducer