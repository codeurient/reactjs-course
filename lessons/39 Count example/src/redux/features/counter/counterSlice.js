import { createSlice } from "@reduxjs/toolkit"


// 1) State yaradiriq
const initialState = {
    counterStart: 0,
}
// 2) counterSlice adinda SLICE yaradiriq. Istediyimiz adi vere bilerik.
export const counterSlice = createSlice({

    name: "counterName",

    initialState,

    // 3) Hadise bas verdikde cagrilacaq funksiyalarimizi yaradiriq
    reducers : {
        // 4) STATE nedir ? Yuxarida olan 'initialState' obyektnin xassesidir.
        decrement : (state) => {
            state.counterStart -= 1
        },
        // 5) Burda da hemcinin.
        increment : (state) => {
            state.counterStart += 1
        },
        // 6) Burda da hemcinin. Elave olaraq ACTION qeyd etmisik. DISPATCH etdikde hemin action avtomatik olaraq gonderilen deyeri qebul edecek. 
        incrementCustom : (state, action) => {
            state.counterStart += action.payload
        }
    }

})

export const {decrement, increment, incrementCustom} = counterSlice.actions
export default counterSlice.reducer