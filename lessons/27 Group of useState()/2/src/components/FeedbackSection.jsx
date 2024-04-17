import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    hasError: true,
    reason: 'help',
  });
  // 4) REASON-nin itme sebebi OBYEKT istifade etdiyimiz zaman, hemin obyekte REASON-nin elave edilmemesidir. 
  function handleNameChange(event) {
    setForm({
      name: event.target.value,
      hasError: event.target.value.trim().length === 0
    })
  }

  function toggleError() { setHasError((prev) => !prev) }
  
  return (
    <section>
        <h3>Feedback Section</h3>
        <Button onClick={toggleError}>Toggle Error</Button><br /><br />

        <form>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" className="control" value={form.name} onChange={handleNameChange} style={{ border: form.hasError ? '1px solid red' : null}}/>

          <label htmlFor={form.reason} >Reason of feedback</label>
          <select id={form.reason} className="control" onChange={(event) => setReason(event.target.value)}>
            <option value="error">Error</option>
            <option value="help">Need help</option>
            <option value="suggest">Suggestion</option>
          </select>
        </form>

        {/* 1) Daha deqiq gormek ucun deyisikliyi form obyektini JSON formatina ceivirb baxaq. FORM obyektinin acarlarini elde edirik keys() metodu ile. KEYS() array qaytarir. MAP() metodu 
        hemin ARRAY icinden tek-tek butun acarlari elde edir. Sonra ise 'FORM[KEY]' yazaraq deyerleri cagirirq */}
        {/* <pre>
          {Object.keys(form).map(   (key) => (<div> {key}: {form[key]} </div>)   )}
        </pre> */}

        {/* 3) Daha qisa bele yazmaq olar: */}
        <pre>
          {JSON.stringify(form, null, 2)}
        </pre>


        {/* 2) console penceresine de yazdirmaq olardi, ama ferqlilik olsun deye bele yaziriq */}

        <Button disabled={form.hasError} isActive={!form.hasError}>Send</Button>
    </section>
  )
}