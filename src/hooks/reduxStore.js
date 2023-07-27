import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterSlice'
import sortReducer from './sortSlice'
import itemCountReducer from './itemCountSlice'
import userReducer from './userSlice'
import loginReducer from './loginSlice'
import productReducer from './productSlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    sort: sortReducer,
    itemCount: itemCountReducer,
    user: userReducer,
    login: loginReducer,
    products: productReducer,
  },
})