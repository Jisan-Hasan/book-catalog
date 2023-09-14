import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSLice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://book-test-ten.vercel.app/',
  }),
  tagTypes: ['books', 'reviews', 'sortedBook'],
  endpoints: () => ({}),
});
