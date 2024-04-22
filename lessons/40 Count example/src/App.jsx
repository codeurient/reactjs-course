// 1) import edirik
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";


export default function App() {

  // 2) useDispatch yaradiriq
  const dispatch = useDispatch();

  // 3) useSelector() funksiyasi avtomatik olaraq STORE-den state-leri elde edir. Hal-hazirda 1 state var.
  // a)  useSelector(console.log(state))            ---->  {     counters:{  counters: { counterStart: 0 }    }      }

  // b)  useSelector(console.log(state.counters))   ---->  {   counterStart: 0   }

  // 4) const initialState = { counterStart: 0, } COUNTERSLICE.JS-de yazilan 'counterStart' ile APP.JSX de yazilan 'counterStart' eyni olmalidir.
  const {counterStart} = useSelector(state => state.counters); //5) STATE parametri configureStore() funksiyasinin komekliyi ile STORE.js-den gonderilen STORE-u qebul edir. STORE.JS-de counters adı 
  // ile reduktoru componente gondermisik deye STORE icinden yeni APP.JSX da STATE parametri nezerde tutulur ve onun icinden hemin reduktora aid kodlari elde etmek ucun 'counters' yaziriq.


  return (
    <div>
      <span onClick={ () => dispatch(decrement()) }>   -   </span>
      <span>{counterStart}</span>
      <span onClick={ () => dispatch(increment()) }>   +   </span>
    </div>
  );
  
}