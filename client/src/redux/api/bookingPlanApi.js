import {createApi, fetchBaseQuery} from'@reduxjs/toolkit/query/react';

export const bookingPlanApi = createApi({
    reducerPath:"bookingPlanApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"/api/v1/bookingplan"
    }),
    endpoints: (builder) => ({
        getAllBookingPlan: builder.query({
            query: () => {
                return{
                    url:"/getallbookingplan",
                }
            },
        }),
    })
})


export const {useGetAllBookingPlanQuery} = bookingPlanApi
