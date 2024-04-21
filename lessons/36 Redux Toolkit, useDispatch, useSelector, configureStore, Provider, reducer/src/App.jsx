import { useDispatch, useSelector } from "react-redux"

export default function App() {

  // 1) STATE-leri deyisdirmek ucun ACTION-lari gondermek lazimdir. ACTION icinde veziyyet yəni TIP var. Bu tipe gore REDUCER funksiyasi STATE-i deyisdirecek. Ancaq REDUCER ilk once bu ACTION-i qebul etmelidir.
  // Hemin ACTION-lari REDUCER-a gondermek ucun ise DISPATCH-dan istifade edirik. 
  const dispatch = useDispatch()

  // 2) Deyisikliyi ekranda eks etdirmek ucun STATE-leri elde etmek lazimdir. STATE-leri elde etmek ucun ise 'useSelector()' funksiyasindan istifade edilir. Bu funksiya parameter olaraq 'defaultState' obyektini qebul edir
  // bizde bu obyektin icinden CASH ('defaultState.cash') xassesini cagiririq. Burda STATE yazmaqda sebeb odur ki, REDUCER funksiyasinin parametrine bele demisik:  (state = defaultState) ve RETURN etmisik STATE.
  const cash = useSelector(state => state.cash)

  // 4)
  const addCash = () => {
    // 6) useDispatch() funksiyasini cagiririq ve parametr olaraq ACTION veririk. ACTION obyekt kimi verilir ve 2 parametr qebul edir. 1ci parametr TYPE. 2ci parametr hereketin nəcür deyiseceyini bildirir.
    dispatch({type: "ADD_CASH", payload: 5})
  }

  // 5)
  const getCash = () => {
    // 7) useDispatch() funksiyasini cagiririq ve parametr olaraq ACTION veririk. ACTION obyekt kimi verilir ve 2 parametr qebul edir. 1ci parametr TYPE. 2ci parametr hereketin nəcür deyiseceyini bildirir.
    dispatch({type: "GET_CASH", payload: 5})
  }

  return (
      <div>
        <div>{cash}</div>
        <div>
          {/* 3) Duyme kliklendikde funksiya addCash ve getCash funksiayalarini cagiracaq. Hemin funksiyalari ise useDispatch() funksiyasini cagirmaq ucun istifade edeceyik.  */}
          <button onClick={() => addCash()}>Add money</button>
          <button onClick={() => getCash()}>Get money</button>
        </div>
      </div>
  )
}