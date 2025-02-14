import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useEffect } from "react";
// 1)
import { getCountry } from "./redux/features/country/countrySlice";


export default function App() {

  const dispatch = useDispatch();

  const {counterStart} = useSelector(state => state.counters); 
  // 2) useSelector() metodu ile STORE-da olan butun STATE-leri elde edirik. Butun dedikde sadece 'countries' reduktoru ile elaqeli olanlari nezerde tuturuq. Elde etdiyimiz state-leri countryArray ve loading variable-larina 
  // yerlesdirerek componentde istifaede edirik. Burda yazdigimiz countryArray ve loading variable-llari 'countrySlice' faylinda yazdigimiz ile eyni olmalidir ki, neyi neye verdiyimiz proqram basa duse bilsin.
  const {countryArray, loading} = useSelector(state => state.countries); 


  // 3) useEffect() metodu ile SERVER-den gelen datalar-i ancaq componentler DOM-a render edildikden sonra cagirasiyiq.
  useEffect(() => {
    dispatch(getCountry())
  }, [])

  return (
    <div>
      <span onClick={ () => dispatch(decrement()) }>   -   </span>
      <span>{counterStart}</span>
      <span onClick={ () => dispatch(increment()) }>   +   </span>

      {/* 4) data yuklenne qeder TRUE oldugu ucun Loading.... mesajini goreceyik*/}
      {loading && <p>Loading...</p>}

      {/* 5) data yuklendikden sonra loading: false olacaq ve ! nida ile false + false = true deyerek data-lari eks etdireceyik. */}
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