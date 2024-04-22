import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useEffect } from "react";
import { getCountry } from "./redux/features/country/countrySlice";

export default function App() {

  const dispatch = useDispatch();

  const {counterStart} = useSelector(state => state.counters); 
  const {countryArray, loading} = useSelector(state => state.countries); 

  useEffect(() => {
    dispatch(getCountry())
  }, [])

  return (
    <div>
      <span onClick={ () => dispatch(decrement()) }>   -   </span>
      <span>{counterStart}</span>
      <span onClick={ () => dispatch(increment()) }>   +   </span>

      {loading && <p>Loading...</p>}

      {!loading && (
        <ul>
          {countryArray.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ul>
      )}

    </div>
  );
  
}