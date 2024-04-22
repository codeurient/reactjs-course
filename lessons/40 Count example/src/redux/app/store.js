import { configureStore } from "@reduxjs/toolkit";
// counterSlice deyerek import etmek olardi basqa ad ile de import etmek olardi.. Burda ne ad ile import edirikse hemin ad ile de asagida cagiraraq istifade etmeliyik.
import counterSlice from "../features/counter/counterSlice";


//  1) configureStore() funksiyasi ile counterSlice-u componente gonderirik.
export const store = counterSlice({

    reducer: {
        // 2) 'counters' bu ad ile componentde state-leri elde edirik.
        counters: counterReducer
    }

})