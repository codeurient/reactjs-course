import { configureStore } from '@reduxjs/toolkit';

import cashReducer from './favorites/favorites.slice';


const store = configureStore({
  reducer: {
    cash: cashReducer,
  }
});


export default store;