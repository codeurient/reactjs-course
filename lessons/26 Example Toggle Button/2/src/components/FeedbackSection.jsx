import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState('')
  const [reason, setReason] = useState('help')  
  const [hasError, setHasError] = useState(true) 

  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }

  function toggleError() {
    // 1) Bu problemin hell olmasi ucun REACT js-in konstruksiyasinda olan qaydadan istifade ede bilerik. setHasError() funksiyasina 'hasError' variable-inin deyerini vermek evezine callback funksiya vere bilerik.
    // 2) useState(true) hook-u TRUE deyerini birbasa bu funksiyanin parameterine verecek. Bizde hemin parametrde olan deyeri deyisdireceyik. Bu cur deyer verme qaydasina bilavasite gonderilen deyer deyilir. Yəni:
    //  setHasError(hasError)           -> Dolayi. Deyisikliyi sonrada qebul etmek.
    //  setHasError((prev) => !prev)    -> Bilavasite. Deyisikliyi aninda qebul etmek.
    setHasError((prev) => !prev)
    // setHasError((prev) => !prev)        //  Kommenti acaraq hec bir deyisiklik olmadigini gore bilerik. 
  }
  
  return (
    <section>
        <h3>Feedback Section</h3>
        <Button onClick={toggleError}>Toggle Error</Button>

        <div>{hasError}</div>
        <form>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" className="control" value={name} onChange={handleNameChange} style={{ border: hasError ? '1px solid red' : null}}/>

          <label htmlFor="reason">Reason of feedback</label>
          <select id="reason" className="control" onChange={(event) => setReason(event.target.value)}>
            <option value="error">Error</option>
            <option value="help">Need help</option>
            <option value="suggest">Suggestion</option>
          </select>

        </form>
        <Button disabled={hasError} isActive={hasError}>Send</Button>
    </section>
  )
}