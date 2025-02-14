import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const tagIinput = useRef(); 
  const [show, setShow] = useState(false)  

  function handleKeyDown(event) {
    if(event.key === 'Enter'){
      setShow(true);
    }
  }

  return (
    <div>
      <h3>Input Value: {show && tagIinput.current.value}</h3>
      <input type="text" className="control" onKeyDown={handleKeyDown} ref={tagIinput}/>
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

        <StateVsRef/>
    </section>
  )
}