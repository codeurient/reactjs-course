import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonPlaceHolderApi = createApi({
  reducerPath: 'jsonPlaceHolder',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.org' }),

  endpoints: (builder) => ({
    getPostById: builder.query({
      query: (id) => `comments/${id}`,
      providesTags: (result, error, id) => [{type: 'Post', id: id}]
    }),

    createPost: builder.mutation({
        query: (newPost) => ({
            url: `posts`,
            method: 'POST',
            body: newPost   
        })
    })
  }),

  keepUnusedDataFor: 30,
  refetchOnMountOrArgChange: 5
})

export const { useGetPostByIdQuery, useCreatePostMutation } = jsonPlaceHolderApi