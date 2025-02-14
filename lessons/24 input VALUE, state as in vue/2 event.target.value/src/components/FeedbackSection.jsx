import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {

  const [name, setName] = useState('')
  const [reason, setReason] = useState('help')

  function handleNameChange(event) {
    // 2) event.target.value INPUT tag-ine daxil edilen deyerlerdir. 
    setName(event.target.value);
  }

  return (
    <section>
        <h3>Feedback Section</h3>


        <form>
          <label htmlFor="name">Your name</label>
          {/* 
            1) INPUT tagi üçün 'onChange' EVENT-ini teyin edirik ki, her deyisiklik bas verdikde 'handleNameChange' adinda funksiya cagrilsin ve bu funksiya INPUT tag-i icinde bas veren her deyisikliyi
            izleyerek bize melumat versin.
          */}
          <input type="text" id="name" className="control" value={name} onChange={handleNameChange}/>

          <label htmlFor="reason">Reason of feedback</label>
          {/* 3) Eyni EVENT-i SELECT üçün yaziriq ancaq ferqlilik olsun deye, funksiyani bir basa 'onCHange' icinde yazaq. */}
          <select id="reason" className="control" onChange={(event) => setReason(event.target.value)}>
            <option value="error">Error</option>
            <option value="help">Need help</option>
            <option value="suggest">Suggestion</option>
          </select>
        </form>

        {/* 4) Deyisikliklikleri gormek ucun, onlari ekrana çap edə bilərik. */}
        <div>{name}</div>
        <div>{reason}</div>

        <Button>Send</Button>
    </section>
  )
}