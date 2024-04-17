import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState('')
  const [reason, setReason] = useState('help')  
  const [hasError, setHasError] = useState(true) // 1) True edek.

  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }

  // 2) Bu funksiyadan istifade ederek 'hasError' variable-inin deyerini deyisdireceyik. Bunun ucun default deyere fikir vermeliyik. 
  function toggleError() {
    // 3) Yəni, hasError true olarsa, evvele false qoy. false+true=false olacaq. 2ci defe yene kliklendikde false+false=true olacaq.
    setHasError(!hasError)
    // 5) Funksiyani terar cagiraq. Mentiqnen hecne bas vermemelidir. Cunki, 1ci f+t=f,  2ci defe f+f=t aliriq. Yeni true deyerine geri qayitdiq. Ama deyisiklik yenede bas verir. Niye? Nece? 
    setHasError(!hasError) 
    // 6) Bu sualin cavabini artiq ders №25-2-de vermisik. Biz 'hasError' deyiskenini cagirana qeder 'setHasError()' heleki hec bir is gormeyib hemin 'hasError' variable-ni deyisdirecek.
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
        {/* 4) Bu duyme ucun isActive = true edirik. Yuxarida duyme kliklendikde 'toggleError()' funksiyasi 'hasError' deyiskeninin deyerini deyisdirecek ve isActive=false olacaq ve tersi. */}
        <Button disabled={hasError} isActive={hasError}>Send</Button>
    </section>
  )
}