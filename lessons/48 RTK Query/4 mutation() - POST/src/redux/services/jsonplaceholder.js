import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const jsonPlaceHolderApi = createApi({
  reducerPath: 'jsonPlaceHolder',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.org' }),

  endpoints: (builder) => ({
    getPostById: builder.query({
      query: (id) => `comments/${id}`,
    }),


    // 1) createPost adinda yeni bir MUTATION HOOK-u yaradiriq, hemin HOOK ise oz novbesinde bir ACTION yaradir. MUTATION() hook-u ile servere POST sorgu gonderirik. MUTATION() hook-u verilenler bazasina 
    // data yazma, yenileme ve silme zamani istifade edilir. 
    createPost: builder.mutation({
        // 2) QUERY funksiyasi POST sorgu gondermek ucun lazim olan obyekti ehtiva edir. 
        query: (newPost) => ({
            url: `posts`,
            method: 'POST',
            body: newPost   // 3) Sorgu gonderildikde, QUERY funksiyasinin parametri, data-lari qebul edir ve body xassesine yerlesdirir.
        })
    })
  }),


})

// 4) useCreatePostMutation HOOK-unu export edirik.
export const { useGetPostByIdQuery, useCreatePostMutation } = jsonPlaceHolderApi