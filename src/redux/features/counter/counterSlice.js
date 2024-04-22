import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    counterStart: 0,
}
export const counterSlice = createSlice({

    name: "counterName",

    initialState,

    reducers : {
        decrement : (state) => {
            state.counterStart -= 1
        },
        increment : (state) => {
            state.counterStart += 1
        },
        incrementCustom : (state, action) => {
            state.counterStart += action.payload
        }
    }

})

export const {decrement, increment, incrementCustom} = counterSlice.actions
export default counterSlice.reducer