import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const AppSlice = createApi({
  reducerPath: 'AppAPI',
  tagTypes: [ 'ClientPhones' ],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://qa.letsdochinese.com/contentconfigserver/api/restaurant/6b1bf2af-be65-11e2-97ab-00ff685223c2',
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlYnJvY2siLCJpYXQiOjE2NTE0NTU5NTF9.kLqJdBr_75ulx4RBz2SQZpjvLMCXRa4Es6bmND4xdIQ');
      return headers;
    }
  }),
  endpoints: () => ({ })
});