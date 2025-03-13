// https://redux-toolkit.js.org/rtk-query/usage/migrating-to-rtk-query#implementation-using-createslice--createasyncthunk
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}
// 8) Data-lari cekmek ucun createAsyncThunk() funksiyasindan istifade etdik ve.s. Bu qaydanin islemesi ile bagli dersi artiq kecmisik. Gostermek istediyim odur ki, yeni bu qayda qarmasiqdir. Onun ucun RTK Query istifade edeceyik.
export const fetchPokemonByName = createAsyncThunk(
    'pokemon/fetchByName',
    async (name, { rejectWithValue }) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      console.log(response);
      
      const data = await response.json()
      if (response.status < 200 || response.status >= 300) {
        return rejectWithValue(data)
      }
      return data
    },
  )

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

   // 2) REDUCER sadece VEZIYYETIN idare edilmesi ucun istifade edilir.
  reducers: {
    decrement: (state) => {
      state.value -= 1
    },
    // 1) Bu yerleri artiq bilirik. Yuxarida olan DECREMETN ile statik bir state elde edirik. Asagida ise INCREMENTBYAMOUNT ile ise xaricden data alaraq STATE-i yenileyirik.
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },

  // 3) Birde VERILENLERIN idare edilmesi vardir hansi ki bunun ucunde diger derse gorduyumuz, 'createAsyncThunk' ve 'extraReducers' istifade edildi.
  extraReducers: (builder) => {
    // 4) DATA-lar yuklenene qeder islesin demek ucun 'pending' elave edirik
    builder.addCase(fetchPokemonByName.pending, (state, action) => {
        console.log(state, action);
    })
    // 5) DATA-lar yuklendikden sonra islesin demek ucun 'fulfilled' elave edirik
    builder.addCase(fetchPokemonByName.fulfilled, (state, action) => {
        console.log(state, action);
    })
    // 6) DATA-larin yuklenmesinde xeta bas verdikde islesin demek ucun 'rejected' elave edirik
    builder.addCase(fetchPokemonByName.rejected, (state, action) => {
        console.log(state, action);
    })
    // 7) ve.s
  },
})

export const { decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer