import React from 'react';
// 1) 
import { useDispatch, useSelector } from 'react-redux';
import { addCash, getCash } from './store/favorites/favorites.slice';

export default function App() {
  const dispatch = useDispatch();
  // 3) Bu hisse demek olar ki, eynidir sadece VALUE elave etdik. useSelector() funksiyasi reduktoru qeydiyyata alaraq ondan gelen data-lari componentde eks etdirmek ucun istifade edilir.
  // STATE parametri STORE.JS faylinda olan reduktordur. 
  const cash = useSelector(state => state.cash.value);

  return (
    <div>
      <div>{cash}</div>
      <div>
        {/* 2) Funksiyalari yuxarida yaratmisdiq. Indi funksiyani EVENT icinde yaradiriq. Bu anonim funksiya duyme kliklendikde 'dispatch()' funksiyasini cagirir
        dispatch() funksiyasida ACTION-i gonderir. TYPE avtomatik teyin edilir. PAYLOAD ise bizim terefimizden gonderilir. Halhazirda 5 -dir. */}
        <button onClick={() => dispatch(addCash(5))}>Add money</button>
        <button onClick={() => dispatch(getCash(5))}>Get money</button>
      </div>
    </div>
  );
}