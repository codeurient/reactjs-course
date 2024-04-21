import { createSlice } from '@reduxjs/toolkit';


const initialState = []

const cashSlice = createSlice({

    name: 'favorites',

    initialState,

    reducers: {
        // 1) Burda ACTION yazdiqda cagirmaq ucun bele demeli idik: 'const recipe = action.payload'  _____ Ancaq daha qisa olmasi ucun 'action' olanda yerde bu curde yazmaq olardi:  {payload}   
        //  ____ Onda: 'const recipe = payload ' demek kifayet olardi.   _____ Yaxud asagidaki kimi de yaza bilerik: DISPATCH action gonderdikde hemin ACTION icinde yazdigimiz deyeri qebul edecek variable adı 'recipe' olacaq.
        addFavorites: (state, {payload: recipe}) => {
            // 2) state nedir ? ARRAY-dir. Yuxarida yazdigimiz initialState-den avtomatik olaraq qebul edir hemin array-i. 
            state.push(recipe)
        },
    }

});

export const { addCash, getCash } = cashSlice.actions;
export default cashSlice.reducer;
