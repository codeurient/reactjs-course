import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {

  // 1) useState('') icinde bir deyer yazdiqda 'name' deyiskenine default olaraq hemin deyer yazilir: useState('Bir seyler')
  const [name, setName] = useState('')
  const [reason, setReason] = useState('help')

  return (
    <section>
        <h3>Feedback Section</h3>


        <form>
          <label htmlFor="name">Your name</label>
          {/* 2) Yuxarida 'NAME' deyiskenine verdiyimiz DEYERI burda INPUT tag-inin VALUE atributuna teyin edirik. Ancaq INPUT tag-ine yazilan deyer NAME atributuna heleki gonderilmir. */}
          <input type="text" id="name" className="control" value={name}/>

          <label htmlFor="reason">Reason of feedback</label>
          <select id="reason" className="control">
            <option value="error">Error</option>
            <option value="help">Need help</option>
            <option value="suggest">Suggestion</option>
          </select>
        </form>

        <Button>Send</Button>
    </section>
  )
}