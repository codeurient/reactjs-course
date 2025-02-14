import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {

  const [name, setName] = useState('')
  const [reason, setReason] = useState('help')

  // 1) Validation ucun ayrica 'useState()' yaradiriq.
  const [hasError, setHasError] = useState(false)

  function handleNameChange(event) {
    setName(event.target.value);

    // 2) Mentiqnen 'NAME' variable-i deyisir ve 'setHasError()' funksiyasi bu deyisikliyi gordukde 'hasError' variable-ina FALSE yaxud TRUE vermelidir.
    setHasError(name.trim().length === 0);
  }

  // 3) Yoxlamaq ucun ekrana ayzdirirq ancaq hec bir netice gormeyeceyik.
  <div>{hasError}</div>

  // 4) Bunun sebebi nedir ? Bunun sebebi hansi kodun 1ci hansi kodu 2ci islemesi ile elaqedardir. Məsələn, ilk once setName() funksiyasi isleyir ve NAME variable-inin deyeri deyisir.
  // setHasError() bu deyisikliyi gore bilmir çünki, setName() funksiyasi, NAME variable-ina deyer yazdirilana qeder setHasError() funksiyasi ile birlikde isleyib.
  

  return (
    <section>
        <h3>Feedback Section</h3>


        <form>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" className="control" value={name} onChange={handleNameChange} style={{ border: name.trim().length ? null : '1px solid red'}}/>

          <label htmlFor="reason">Reason of feedback</label>
          <select id="reason" className="control" onChange={(event) => setReason(event.target.value)}>
            <option value="error">Error</option>
            <option value="help">Need help</option>
            <option value="suggest">Suggestion</option>
          </select>

        </form>

        <Button>Send</Button>
    </section>
  )
}