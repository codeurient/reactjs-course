import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
// 1)
import countrySlice from "../features/country/countrySlice";


export const store = configureStore({

    reducer: {
        counters: counterSlice,

        // 2)  configureStore() funksiyasi ile countrySlice-i componente gonderirik.
        countries: countrySlice,
    }

})