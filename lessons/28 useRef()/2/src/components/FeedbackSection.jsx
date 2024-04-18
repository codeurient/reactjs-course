import { useState } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const [value, setValue] = useState('')
  const [show, setShow] = useState(false)  // 1) Bunun ucun basqa bir state daha yaza bilerik.

  function handleKeyDown(event) {    if(event.key === 'Enter'){   setShow(true);  }    }

  return (
    <div>
      <h3>Input Value: {show && value}</h3>
      <input type="text" className="control" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown}/>
    </div>
  )
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    hasError: true,
    reason: 'help',
  });

  function handleNameChange(event) { 
    setForm((prev) => ({
      ... prev, 
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }))
  }

  return (
    <section>
        <h3>Feedback Section</h3>

        <form style={{marginBottom: '1rem'}}>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" className="control" value={form.name} onChange={handleNameChange} style={{ border: form.hasError ? '1px solid red' : null}}/>

          <label htmlFor={form.reason} >Reason of feedback</label>
          <select id={form.reason} className="control" onChange={ (event) => setForm((prev) => ({... prev, reason: event.target.value}))}> 
            <option value="error">Error</option>
            <option value="help">Need help</option>
            <option value="suggest">Suggestion</option>
          </select>
          <Button disabled={form.hasError} isActive={!form.hasError}>Send</Button>
        </form>

        {/* 2) INDI entere basdiqda elave edilecek ancaq bir defe sonra yene deyer elave etdikde baslayacaq ekranda entere basmadan gosterilmeye. Bunun ucunde basqa bir state yazmaq olar ancaq bu cixis yolu deyildir ve uzundur. */}
        <StateVsRef/>
    </section>
  )
}