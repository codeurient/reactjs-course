import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";


export default function App() {

  const dispatch = useDispatch();

  const {counterStart} = useSelector(state => state.counters); 
  // 1) useSelector() funksiyasi ile store-dan STATE-leri elde edirik.
  const {countryArray} = useSelector(state => state.countries); 

  // Ekrana data-lari yazdirmaga calisiriq ancaq gedib baxsaq gorerik ki bos array qayidir.
  console.log(countryArray);

  return (
    <div>
      <span onClick={ () => dispatch(decrement()) }>   -   </span>
      <span>{counterStart}</span>
      <span onClick={ () => dispatch(increment()) }>   +   </span>
    </div>
  );
  
}