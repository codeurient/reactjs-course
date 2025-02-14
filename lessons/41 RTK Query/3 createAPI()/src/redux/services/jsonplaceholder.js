// https://redux-toolkit.js.org/rtk-query/overview
// https://www.jsonplaceholder.org/
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// 1) Redux Toolkit-de createSlice() funksiyasindan istifade etmisdik ancaq RTK Query-de createApi() funksiyasindan istifade etmeliyik. Hemin funksiyani 'jsonPlaceHolderApi' adli deyiskene qoyaraq EXPORT edirik. 
export const jsonPlaceHolderApi = createApi({
// 2) reducerPath xassesine 'jsonPlaceHolder' deyerini vermisik. jsonPlaceHolderApi-ni export ederek STORE.JS faylinda cagirdiqda jsonPlaceHolderApi.reducerPath yazaraq 'jsonPlaceHolder' adini elde edirik ve bu ada
// jsonPlaceHolderApi.reducer yazaraq RTK Query terefinden avtomatik olaraq yaradilan Reduktor-u veririk. Reduktor-lar, SADECE STATE yaxud ACTION qebul ederek STATE deyisdirmek, data elave etmek ucun istifade edilir: 

// console.log(jsonPlaceHolderApi.reducer) ----> (state, action) => combinedReducer(resetApiState.match(action) ? void 0 : state, action)     ----> STORE.JS faylinda.
  reducerPath: 'jsonPlaceHolder',

// 3) fetchBaseQuery() metodu ile sorgu gondererek data-lari cagiririq.
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.org' }),

// 4) endpoints ile API-nin uc noqtelerini teyin edirik. Yəni baseQuery-nin devamidir. 
  endpoints: (builder) => ({
    // 5)  builder.query   ---> linkin yəni sorgunun sonuna neyin elave edileceyini teyin edir.  
    getPostById: builder.query({
      query: (id) => `comments/${id}`,
    }),
  }),


})



// 6) jsonPlaceHolderApi -ni hem yuxarda hemde burda useGetPostByIdQuery adı ile EXPORT etmisik. Yuxarida EXPORT etdikde createApi() funksiyasinin butun xasselerini elde edirik ki, diger fayllarda istifade ede bilek.
// Bu asagida EXPORT etdiyimizde ise DATA-lari elde elderek diger fayla gondermis sayiliriq. Bu ad mutleq asagida gorduyunuz kimi yazilmalidir ve deyisen hisse sadece ENDPOINTS-de olan ad hissesi ola biler. 
// Yuxarida ENDPOINTS yerine baxaq. Goreceyik ki, getPostById yazilib. Eger orda 'abc' yazilsa Indi onda export edilen ad bele olacaqdi: useAbcQuery         Qisaca: use[EndpointName]Query..... Belelikle oz HOOk-umuzu yaradiriq.
// Reduktoru STORE icine yerlesdirdikden sonra useGetPostByIdQuery() HOOK-nu APP.JSX faylinda cagiraraq getPostById endpoint-e uygun deyer vereceyik ve data elde edeceyik.
export const { useGetPostByIdQuery } = jsonPlaceHolderApi


// 7) Yuxarida yazdigimiz ENDPOINTS bir ACTION-dir eslinde ve 'jsonPlaceHolderApi'-ni EXPORT ederek Redukotru, ACTION-lari ve.s, STORE.JS faylinda STORE-a yerlesdiririk ki, COMPONENT-lerde istifade ede bilek deye.

// 8) STORE.JS faylinin sonudunda yazdigimiz 'setupListeners(store.dispatch)' ise STORE icinden avtomatik olaraq ACTION-i qebul edir ve component icinde istifade edildikde hemin ACTION-a bir deyer gonderilecek deye bildirir.