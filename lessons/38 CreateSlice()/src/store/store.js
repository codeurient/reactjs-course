import { configureStore } from '@reduxjs/toolkit';

// 1) 'cashReducer' adı altında favorite.slice.js faylini IMPORT edirik 
import cashReducer from './favorites/favorites.slice';


// 2) configureStore() funksiyasi ile 'cashReducer'-u gonderirik COMPONENT-e.
const store = configureStore({
  reducer: {
    // 3) Birden cox 'reducers' gondermek ucun obyekt yaratmisiq ve icinde XASSE ve DEYER kimi qeyd etmisik gonderilen 'reducers'-lari. Her xasse adı component-in bir hissesini 
    // bir funksionalligini ifade eden adda olmalidir. Çünki bu adı component içində yazaraq uyğun reduktorda olan melumatları əldə edəcəyik.
    cash: cashReducer,
  }
});


// 4) STORE adı ilə EXPOR edirik ki, MAİN.JSX -da olduğu kimi İMPORT edərək COMPONENT içində istifadə edə bilək reducer-ları.
export default store;