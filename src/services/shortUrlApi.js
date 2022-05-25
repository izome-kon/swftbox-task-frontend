import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import ServerSettings from '../server.setting'


const baseUrl = ServerSettings.apiBaseUrl

export const shortUrlApi = createApi({
  reducerPath: 'shortUrlApi',
  baseQuery: fetchBaseQuery({
    baseUrl
  }),
  endpoints: (builder) => ({
    getShortUrl: builder.mutation({
      query: (params) => {
        return {
          url: 'decode',
          method: 'GET',
          params: params
        }
      }
    }),
    postShortUrl: builder.mutation({
      query: (body) => ({
        url: 'encode',
        method: 'POST',
        body
      })
    }),
    getShortUrlStatistic: builder.mutation({
      query: (params) => {
        return {
          url: `statistic/${params}`,
          method: 'GET',
        }
      }
    }),
  })
})
export const {
  useGetShortUrlMutation,
  usePostShortUrlMutation,
  useGetShortUrlStatisticMutation,
} = shortUrlApi