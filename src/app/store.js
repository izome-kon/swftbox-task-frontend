import { configureStore } from '@reduxjs/toolkit'
import { shortUrlApi } from '../services/shortUrlApi'

export default configureStore({
  reducer: {
    [shortUrlApi.reducerPath]: shortUrlApi.reducer
  },
})

