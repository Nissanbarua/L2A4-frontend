import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://library-backend-dusky.vercel.app/api' }),
  tagTypes: ['Books', 'Borrow'],
  endpoints: () => ({}),
});


// 'https://library-backend-dusky.vercel.app/api'
// 'http://localhost:5000/api' 
// https://library-backend-dusky.vercel.app/api