import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
// 1) Import edirik
import countrySlice from "../features/country/countrySlice";


export const store = configureStore({

    reducer: {
        counters: counterSlice,
        // 2) Component-de gonderirik.
        countries: countrySlice,
    }

})