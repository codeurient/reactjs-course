import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'


const initialState = {
    loading: false,
    countryArray: [],
}

// 1) getCountry adlı variable-a createAsyncThunk() funksiyasini teyin edirik. Bu funksiyaya 2 parametr veririk. 
//    1ci parametr - ACTION-inin TYPE deyeridir:   {type: 'getCountryData/pending', payload: undefined, meta: {…}}     ___Asagida extraReducers icinde console.log(action);  yazaraq baxmaq olar. 
//    'getCountry' variable-ini DISPATCH etdikde hemin DISPATCH funksiyasi ACTION gonderdiyi ucun bu ACTION hal-hazirda gonderilen getCountry sayilir. Ona gorede createAsyncThunk() funksiyasinin 1ci parametri ACTION-inin type-dir.
//    2ci parametr - ACTION-inin PAYLOAD parametrinin serverden gelen data-laridir.
export const getCountry = createAsyncThunk('getCountryData', async() => {
        const {data} = await axios.get('https://restcountries.com/v3.1/all')
        return data;
})

export const countrySlice = createSlice({
    name: "countryName",
    initialState,

    reducers : { },
    
    // 2) Redux Toolit icinde API ile data cekmek ucun createAsyncthunk() funksiyasindan istifade etmek lazimdir ve bunun ucun 'reducer' evezine 'extraReducers' istifade edirik.
    // BUILDER bir obyektdir ve addCase() ve.s kimi metodlari ehtiva edir hansi ki bu metodlar vasitesi ile EVENT elave ede bilirik serverden gelen data-lar ucun. Məsələn: 
    // a) pending    - datalar yuklenene qeder.         ____ 
    // b) fulfilled  - datalar yuklendikden sonra.      ____data-lar (getCountry) yuklenene qeder funksiya isleyecek. Bu funksiyanin parametri avtomatik olaraq STATE-leri qebul edir. 
    // 
    extraReducers : (builder) => {

        builder.addCase(getCountry.pending, (state) => {
            // 3) data-lar (getCountry) yuklenene qeder funksiya isleyecek. Bu funksiyanin parametri avtomatik olaraq STATE-leri qebul edir. loading adli state-in deyerini TRUE edirik ki, APP.JSX componentinde data yuklenene 
            // qeder bir mesaj ekranda gosterek. Yəni deyeciyik ki, ne qeder ki, data yuklenir TRUE oldugu muddetce teyin edilmis mesaji goster.
            state.loading = true
        })

        builder.addCase(getCountry.fulfilled, (state, action) => {
            console.log(state);
            // 4) Datalar yuklendikde 'fulfilled' EVENT-i isleyecek ve addCase() metodunun 2ci parametrinde olan funksiya STATE ve ACTION qebul edir. countryArray adli state-i cagiraraq ACTION-inin icinde data-lari hemin state-e
            // gonderirik.
            state.countryArray = action.payload
            // 5) data-lar yuklendikden sonra loading adli state-i FALSE edirik ki, ekranda gosterdiyimiz Loading... mesaji yoxa cixsin.
            state.loading = false
        })
    },

})

export default countrySlice.reducer