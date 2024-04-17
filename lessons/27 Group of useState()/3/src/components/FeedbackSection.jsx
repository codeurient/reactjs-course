import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  // 2) Burda FORM variable-inda SELECT ile secilib gonderilen deyerlerden biri var. setForm() avtomatik olaraq deyerleri FORM variable-ina verir:   console.log(form);  yazaraq baxmaq olar.
  const [form, setForm] = useState({
    name: '',
    hasError: true,
    reason: 'help',
});
  

  function handleNameChange(event) {
    setForm({
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
      /// 3) FORM variable-i icinde 'name', 'hasError', 'reason' var ve biz FORM.REASON yazaraq REASON xassesinde olan deyeri handleNameChange() funksiyasinda olan REASON-a veririk.
      reason: form.reason
      // 4) Niye INPUT tag-i ile elaqeli bir event funksiyasina select tag-i ile bagli xasseni elave etmisik? Cunki eger burda REASON yazmasaydiq, INPIT tag-ine deyer elave etdikde REASON silinecekdi ve 
      // setForm() butun deyisiklikleri FORM variable-ina gondermeyecekdi. Sadece 'name' ve 'hasError' gedecekdi.
    })
  }


  return (
    <section>
        <h3>Feedback Section</h3>

        <form>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" className="control" value={form.name} onChange={handleNameChange} style={{ border: form.hasError ? '1px solid red' : null}}/>

          <label htmlFor={form.reason} >Reason of feedback</label>
          {/* 1) SELECT ile bir deyer secdikde 'setForm()' funksiyasi cagrilacaq. Bu funksiya SELECT ile secilen DEYERI gonderecek en yuxarida olan FORM variable-ina.  */}
          <select id={form.reason} className="control" onChange={ (event) => setForm(event.target.value)}> 
          {/* 5) Hemcinin burda hal hazirda setForm() funksiyasi SELECT tag-i ile deyer secdikde diger name ve hasError xasselerini silir. Ele bir sey yazmaliyiq ki, hem INPUT tag-ine deyer daxil etdikde hem SELECT ile deyer secdikde
          setForm() bu deyisikliklerin hamisini FORM variable-ina gondere bilsin */}
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