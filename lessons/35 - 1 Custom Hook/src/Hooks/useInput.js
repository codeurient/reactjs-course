// 1) React js-de öz Hook-larimizi (Custom Hooks) yarada bilirik. Öz hooklarimizi HOOKS adli qovluqda yerlesdireceyik. Normalda hook-larin basinda USE sozu oldugu ucun bizde standarta uygun olaraq
// USE yazasiyiq. Vacib deyildir ancaq meslehetdir.
import { useState } from "react";

export default function useInput(defaultValue = '') { // 3) Default deyer olaraq boş string teyin edirik.

    // 2) useState, useEffect ve.s kimi hooklari component yaxud custom hook-larin icinde istifade ede bilerik. Custom hook-lar eslinde bildiyimiz normal funksiyalardir.
    const [value, setValue] = useState(defaultValue)

    // 3) useInput() custom hook -u RETURN edir obyekt icinde VALUE ve onChange xasseleri ile.
    return {
        value,  // 4) default deyeri boş stringdir
        onChange: (event) => setValue(event.target.value),  // 5) default deyeri funksiyadir hansi ki, bu funkisya setValue() funksiyasini cagirir. setValue ise VALUE variable-ina yeni deyer teyin edir.
    }

}


// 6) Nece istifade ede bilerik bu custom hook-u ?







// 7) NOT: Yuxarida oldugu kimi colde bir variable yarada sonra ona deyer vere sonra ise bu variable-i obyekt icinde istifad ede bilerik:
// let deyer2 = 'salam dunya';
// let b = { deyer2 }
// console.log(b);

// 8) NOT: ancaq obyekt icinde boş xasse yaratmaq xəta verər:
// let b = { deyer2 }
// console.log(b);          ReferenceError: deyer2 is not defined


// 9) NOT: deyeri olmayan variable-i ekrana yazdirdiqda ise sadece indefined elde edirik.
// let b;
// console.log(b);



