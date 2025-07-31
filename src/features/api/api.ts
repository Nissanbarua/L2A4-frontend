import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.VITE_API_URL }),
  tagTypes: ['Books', 'Borrow'],
  endpoints: () => ({}),
});