import { useState } from 'react';
import logo from '/logo-name.svg';

export default function Header() {

    // 1) Vaxtin avtomatik deyismesi ucun de useState() hook-undan istifade edirik. 'NOW' deyiskenine default olaraq indiki vaxti 'new Date()' veririk.
    const [now, setNow] = useState(new Date())

    // 2) Sonra her 1 saniyeden setNow() funksiyasini tekrar-tekrar cagiracaq setInterval() funksiyasini yaradiriq. setNow() funksiyasinin icinde deyisen tarix 'NOW' deyiskenine
    // avtomatik olaraq gonderilir. 
    setInterval(() => setNow(new Date()), 1000)

    return (
      <header>
        <img src={logo} />

        <div>
          {/* 3) Deyisen tarixi ise burda ekrana eks etdiririk.  */}
          <span>Time is now: { now.toLocaleTimeString() }</span>
        </div>
      </header>
    )
}