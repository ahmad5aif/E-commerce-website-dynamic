import { createSlice } from '@reduxjs/toolkit'

export const scrollSlice = createSlice({
    name: 'scrollRef',
    initialState: null,
    reducers: {
        scrollTo: (state, action) => {
            return action.payload.current.scrollIntoView()
        }
    },
})

export const { scrollTo } = scrollSlice.actions

export default scrollSlice.reducer