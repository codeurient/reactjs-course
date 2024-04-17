import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState('')
  const [reason, setReason] = useState('help')  
  const [hasError, setHasError] = useState(false)

  function handleNameChange(event) {
    setName(event.target.value);
    // 2) Asagidaki kimi yazdiqda setName() ile birlikde setHasError() funksiyasida deyisikliyi anliq gore bilir ve 'hasError' variable-ina deyisiklik olduqda xeber gonderir.
    setHasError(event.target.value.trim().length === 0);
  }

  
  return (
    <section>
        <h3>Feedback Section</h3>

        <div>{hasError}</div>


        <form>
          <label htmlFor="name">Your name</label>
          {/* 2)  */}
          <input type="text" id="name" className="control" value={name} onChange={handleNameChange} style={{ border: hasError ? '1px solid red' : null}}/>

          <label htmlFor="reason">Reason of feedback</label>
          <select id="reason" className="control" onChange={(event) => setReason(event.target.value)}>
            <option value="error">Error</option>
            <option value="help">Need help</option>
            <option value="suggest">Suggestion</option>
          </select>

        </form>

        {/* 
            3) Eger dogru olmuyan melumat varsa, duyme gonderme funksiyanalligini itirsin. Bunun ucun DISABLED true olmalidir. Bizim esil duymemiz Button.jsx faylinda olan duyme oldugu ucun
            FeedbackSection.jsx faylinda asagida yazdigimiz kimi 'disabled' adinda (istenilen ad ola biler) bir parametr yazaraq qarsi terefede 'hasError' variable-ini gondermeliyik.

            Sonra qarsi terefde esil button tag-inin 'disabled' parametrine hemin 'hasError' variable-ini vermeliyik:   <button disabled={hasError}></button>

            Hemcinin, ID, CLASS, EVENT ve.s kimi parametrleri hem burdan gondermek hem qarsi terefde eyni seyleri yazaraq qebul etmek kodu tekrarlamaq menasina gelir. Nece edek ?

            Componentlerden gonderilen parametrlerin ne qeder oldugunu bilmirik. Milyon parametrde gondermek olar ve bu 'BUTTON.JSX' faylinda milyon defe manual iş gormek, parametr qebul
            etmek menasina gelir. Bunun ucun REST operatorundan istifade edirik (...). Separator operatoruna oxsasada sehf salmaq olmaz. Mentiqnen her ikisi eyni işi gorur. Artiq ne qeder 
            parametr gondersekde hamisi bir array icinde yerlesdirilecek:   export default function Button({children, onClick, ... props }) { }.    PROPS ozumuz veren addir.
        */}
        <Button disabled={hasError}>Send</Button>
    </section>
  )
}