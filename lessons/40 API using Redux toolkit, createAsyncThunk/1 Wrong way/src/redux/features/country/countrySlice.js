import { createSlice } from "@reduxjs/toolkit"
// 1) npm install axios
import axios from 'axios'


const initialState = {
    countryArray: [],
}

export const countrySlice = createSlice({

    name: "countryName",

    initialState,

    reducers : {
        getCountry : async (state) => {
            const {data} = await axios.get('https://restcountries.com/v3.1/all')
            state.countryArray = data
        }
    }

})

export const {getCountry} = countrySlice.actions
export default countrySlice.reducer