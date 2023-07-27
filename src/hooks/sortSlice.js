import { createSlice } from '@reduxjs/toolkit'

export const sortSlice = createSlice({
    name: 'sort',
    initialState: '',
    reducers: {
        inOrder: (state, action) => {
            return state = action.payload
        }
    },
})

export const { inOrder } = sortSlice.actions

export default sortSlice.reducer