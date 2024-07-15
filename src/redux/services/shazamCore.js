{/* API calls */ }
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '1a4b7b0596msh6baea09fcf2159bp1c827bjsndc97d914606e');

            return headers;

        },
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => 'charts/get-top-songs-in-world?limit=10' }),
    }),

});

export const {
    useGetTopChartsQuery, } = shazamCoreApi;

