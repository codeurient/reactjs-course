// 1) createSlice( ) fconfigureStoreunksiyasini import edirik.
import { createSlice } from '@reduxjs/toolkit';


const cashSlice = createSlice({

    // 2) Bu adı hec yerde istifade etmemisik.
    name: 'cash',

    // 3) State teyin edirik. 
    initialState: { value: 0 },


    // 4) reducers teyin edirik. reducers icinde 2 metod yaziriq. Bu metodlardan 1cinin adı 'addCash' 2cinin adə 'getCash' -dir. 
    // a) addCash metodunun STATE parametri avtomatik olaraq 'initialState' obyektini qebul edir. VALUE xassesi ilede deyeri elde edirik.
    // b) addCash metodunun ACTION parametri 2 parametr qebul etmeli idi. Ancaq goruruk ki, yoxdur. Bes onda TYPE ve PAYLOAD parametrleri ve deyerleri hardan gelir ? 
    // TYPE parametrinin deyeri de avtomatik olaraq REDUX Toolkit terefinden teyin edilir. Bunu teyin eden ise createSlice() funksiyasinin ozudur. Bu funksiyanin NAME deyeri 
    // ve addCash metod adı birleserek TYPE parametrinin deyerini emele getirir:  {type: 'cash/addCash', payload: 5}
    reducers: {

        addCash: (state, action) => {
            state.value += action.payload;
        },

        getCash: (state, action) => {
            state.value -= action.payload;
        }

    }

});




// 5) cashSlice deyiskenini konsola yazdirsaq gorerik ki, geri obyekt qayidir ve icinde REDUX toolkit-in xasseleri var. actions, reducer ve.s kimi.
// { addCash, getCash } = cashSlice.actions;   bele yazdiqda hemin action ile bagli olan metodlari 'addCash' ve 'getCash' variable-larina veririk.
export const { addCash, getCash } = cashSlice.actions;
// 6) reduktoruda export edirik ki, STORE.JS faylinda configureStore() funksiyasindan istifade ederek component-e gonderek.
export default cashSlice.reducer;
