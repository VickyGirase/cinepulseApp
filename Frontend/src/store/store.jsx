import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './movieSlice'
import tvSlice from './tvSlice'
import personSlice from './personSlice'
import userSlice from './userSlice'

export const store = configureStore({
    reducer: {
        movie: movieSlice,
        tv: tvSlice,
        person: personSlice,
       user:userSlice
    }
})
