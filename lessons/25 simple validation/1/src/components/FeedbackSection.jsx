import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {

  const [name, setName] = useState('')
  const [reason, setReason] = useState('help')

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <section>
        <h3>Feedback Section</h3>


        <form>
          <label htmlFor="name">Your name</label>
          {/* 1) Eger 'NAME' deyiskeninin LENGTH-i olarsa yəni NAME deyiskeni icinde bir seyler olarsa STYLE NULL olaraq teyin edilsin, eks halda bu deyerler verilsin: '1px solid red'  */}
          <input type="text" id="name" className="control" value={name} onChange={handleNameChange} style={{ border: name.trim().length ? null : '1px solid red'}}/>

          {/* 2) Ama bu tamda dogru yanasma deyil cunki daxil olan kimi qirmizi reng goreceyik. */}

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