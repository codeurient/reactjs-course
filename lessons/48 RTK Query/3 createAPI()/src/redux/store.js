import { configureStore } from "@reduxjs/toolkit";
import { jsonPlaceHolderApi } from "./services/jsonplaceholder";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
        // 1) Normalda Reduktor yaratdiqda bir ad verirdik ve reduktoru hemin ada teyin edirdik. Meselen:       counter: counterSlice           Cunki export edilen counterSlice
        // icinde REDUCTOR var idi ve meselen getCountry(state, action) adli metodu ehtiva edirdi. 
        
        // Hemcinin indi asagida yazdigimizda mentiqnen bele bir seydir:        jsonPlaceHolder: (state, action) => combinedReducer(resetApiState.match(action) ? void 0 : state, action)

        // console.log(jsonPlaceHolderApi.reducer)   konsol penceresine yazdirsaq bunu gore bilerik. Belelikle configureStore() metodu ile reduktoru bazaya yəni STORE icine yerlesdiririk.

        // [jsonPlaceHolderApi.reducerPath]: jsonPlaceHolderApi.reducer bu cur yazdiqda RTK QUERY avtomatik olara REDUCTOR teyin etmis olur.

        // STORE-a yerlesibdirse onda component icinde hemin reduktor ve onunla bagli olan her sey el catandir. APP.JSX faylinda useGetPostByIdQuery-ni cagiraraq reduktora ID gondermisik.
        [jsonPlaceHolderApi.reducerPath]: jsonPlaceHolderApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonPlaceHolderApi.middleware),
})


setupListeners(store.dispatch)