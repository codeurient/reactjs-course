import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jsonPlaceHolderApi = createApi({
  reducerPath: 'jsonPlaceHolder',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),

  endpoints: (builder) => ({
    getPostById: builder.query({
      query: (id) => `comments/${id}`,
    }),

    createPost: builder.mutation({
        query: (newPost) => ({
            url: `posts`,
            method: 'POST',
            body: newPost   
        })
    })
  }),

// 1) keepUnusedDataFor - bu xasse o demekdir ki, istifade edilmeyen data-lari 30 saniye muddetine cache yaddasda saxla ve sonra sil
  keepUnusedDataFor: 30,
// 2) refetchOnMountOrArgChange - bu xasse her 5 saniyeden bir servere sorgu gondererek data-lari yeniden cekmek ucun istifade edilir. 
// Eger bir yenilik olarsa her 5 saniyeden bir sorgu gonderidiyi ucun bizim data-larimiz yenilenecek.
  refetchOnMountOrArgChange: 5
})

export const { useGetPostByIdQuery, useCreatePostMutation } = jsonPlaceHolderApi