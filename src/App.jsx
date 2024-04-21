import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCash, getCash } from './store/favorites/favorites.slice';

export default function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.value);

  return (
    <div>
      <div>{cash}</div>
      <div>
        <button onClick={() => dispatch(addCash(5))}>Add money</button>
        <button onClick={() => dispatch(getCash(5))}>Get money</button>
      </div>
    </div>
  );
}