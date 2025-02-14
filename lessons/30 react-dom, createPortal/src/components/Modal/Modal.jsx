// 1) Modal pencere diger butun elementlerden yuxarida dayanmalidir. Bunu tebii ki, css ile etmek olar oncaq REACT-da nece edirik ? REACT-da PORTAL deyilen bir qayda var 
// ve hemin qayda ile bunu etmek mumkundur.


import {createPortal} from 'react-dom'
import './Modal.css'

export default function Modal({children, open}) {
    // 2) Bu funksiyanin 1ci parametri gonderilen element, 2ci parametri icine yerlesdirilen elementdir. Yəni, hansi elemente.
    return createPortal(
        <dialog open={open}> {children} </dialog>,
        document.getElementById('modal')
    )   
}