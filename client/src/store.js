import {configureStore} from '@reduxjs/toolkit'
import bookingReducer from './features/booking/bookingSlice'
import adminReducer from './features/admin/adminSlice'
import bookingDetails from './features/bookingDetails/bookingDetailsSlice'
import { adminAuthApi } from './redux/api/adminAuthApi'
import { bookingPlanApi } from './redux/api/bookingPlanApi'


export const store = configureStore({
    reducer:{
        booking: bookingReducer,
        admin: adminReducer,
        bookingDetails: bookingDetails,
        [adminAuthApi.reducerPath]:adminAuthApi.reducer,
        [bookingPlanApi.reducerPath]:bookingPlanApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        adminAuthApi.middleware,
        bookingPlanApi.middleware,
    ])
})