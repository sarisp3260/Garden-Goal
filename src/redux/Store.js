import { configureStore } from '@reduxjs/toolkit'
import userSlices from './slices/UserSlices'

export const store = configureStore({
  reducer: {
      stateUser:userSlices
  },
})