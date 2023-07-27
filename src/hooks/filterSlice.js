import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      state.push(action.payload)
    },
    removeFilter: (state, action) => {
      return (state.filter((e) => {
        return action.payload !== e
      }))
    }
  },
})

export const { addFilter, removeFilter } = filterSlice.actions

export default filterSlice.reducer