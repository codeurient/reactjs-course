import { configureStore } from "@reduxjs/toolkit";

// 1) configureStore() funksiyasini yaradiriq ve STORE adi ile export edirik.
export const store = configureStore({

    // 2) Burda yazdigimiz reduktorlar diger componentlerde istifade edile bilsin deye, MAIN.JSX faylinda PROVIDER adli componentden istifade
    // edeceyik ve bu componente parametr olaraq STORE.JS faylindan export edilen STORE variable-ini verceyik.
    reducer: {
        
    }

})