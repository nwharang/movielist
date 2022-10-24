import { configureStore } from '@reduxjs/toolkit'
import { apiReducer } from '../features/api/apiSlice'
import { sessionReducer } from '../features/api/sessionSlice'
import { orderReducer } from '../features/api/orderSlice'
import authReducer from '../features/auth/authSlice'
import { apiSlice } from './auth'

export const store = configureStore({
    reducer: {
        data: apiReducer,
        session: sessionReducer,
        order: orderReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),

})