import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    hasError: true,
    reason: 'help',
  });


  function handleNameChange(event) { // 1) => oxdan sonra yazilan yumru morterizeler qrup yaratmaq ucundur. 
    setForm((prev) => ({
      // 2) setForm() funksiyasinin icinde callback yaratmisiq. Callback-in PREV adli parametri yxuaridaki FORM variable-inda olan obeykti elde edir. Bu obyektin icinde var:   {name: '',   hasError: true,   reason: 'help'}
      // => oxdan sonra yazdigimiz 'name' ve 'hasError', setForm() funksiyasinin qebul etdiyi yeni deyerlerdir. Bu cur yazdiqda seForm() funksiyasi hem ...prev (reason) hemde yeni deyerleri yazdiracaq FORM icine. Artiq 
      // INPUT tag-ine deyer daxil etdikde REASON itmeyecek.
      ... prev, 
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }))
  }


  return (
    <section>
        <h3>Feedback Section</h3>

        <form>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" className="control" value={form.name} onChange={handleNameChange} style={{ border: form.hasError ? '1px solid red' : null}}/>

          <label htmlFor={form.reason} >Reason of feedback</label>
          {/* 2) SELECT ile secim etdikde INPUT tag-ine aid deyerlerin itmemesi ucun de eyni mentiqi burda tetbiq edirik.  */}
          <select id={form.reason} className="control" onChange={ (event) => setForm((prev) => ({... prev, reason: event.target.value}))}> 
            <option value="error">Error</option>
            <option value="help">Need help</option>
            <option value="suggest">Suggestion</option>
          </select>
        </form>

        <pre>
          {JSON.stringify(form, null, 2)}
        </pre>

        <Button disabled={form.hasError} isActive={!form.hasError}>Send</Button>
    </section>
  )
}