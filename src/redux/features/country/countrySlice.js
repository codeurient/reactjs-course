import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'


const initialState = {
    loading: false,
    countryArray: [],
}


export const getCountry = createAsyncThunk('getCountryData', async() => {
        const {data} = await axios.get('https://restcountries.com/v3.1/all')
        return data;
})


export const countrySlice = createSlice({
    name: "countryName",
    initialState,

    reducers : { },
    
    extraReducers : (builder) => {



        builder.addCase(getCountry.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getCountry.fulfilled, (state, action) => {
            state.countryArray = action.payload
            state.loading = false
        })
    },

})

export default countrySlice.reducer