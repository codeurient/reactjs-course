import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  // 1) Fikir vermisinizse useState() hook-u bir defeden cox tekrarlanir. Hemin tekrarlanmani aradan qaldiraq. 
  const [form, setForm] = useState({
    name: '',
    reason: 'help',
    hasError: true
  });

  function handleNameChange(event) {
    // 2) setName() ve setHasError() funksiyalarini ayri-ayri cagirmaq evezine bir defe setForm() yazmaq kifayet edecek:
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
          {/* 3) value={name} yaza bilmirik cunki artiq NAME yoxdur. Onun evezine asagidaki kimi yaziriq. Yəni:  
                                                                                                                event.target.value                      -> name     -> form
                                                                                                                event.target.value.trim().length === 0  -> hasError -> form     ve.s
          */}
          <input type="text" id="name" className="control" value={form.name} onChange={handleNameChange} style={{ border: form.hasError ? '1px solid red' : null}}/>

          {/* 4) reason sehf yazmisdiq. Onuda duzeldirik. */}
          <label htmlFor={form.reason} >Reason of feedback</label>
          <select id={form.reason} className="control" onChange={(event) => setReason(event.target.value)}>
            <option value="error">Error</option>
            <option value="help">Need help</option>
            <option value="suggest">Suggestion</option>
          </select>
        </form>
        {/* 6) Gedek neticeye baxaq. Sehifeye daxil olduqda REASON var idi ancaq Input sahesinde deyer daxil etmeye basladiqda REASON hansisa sebebe gore yoxa cixir. Niye? */}
        <pre>
          Name: {form.name}      <br />
          Reason: {form.reason}
        </pre>

        {/* 5) */}
        <Button disabled={form.hasError} isActive={!form.hasError}>Send</Button>
    </section>
  )
}