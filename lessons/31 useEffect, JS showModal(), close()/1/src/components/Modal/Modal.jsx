import {createPortal} from 'react-dom'
// 1) useRef-i IMPORT edirik
import { useRef } from "react";
import './Modal.css'

export default function Modal({children, open}) {
    // 2) useRef-i deyiskene veririk.
    const dialog = useRef()

    if(open) {
        // 4) Eger button kliklenelre MODAL pencere acilarsa OPEN true olacaq ve iF isleyerek govdede ki, showModal() cagrilacaq hemin MODAL pencere ucun.
        dialog.current.showModal()
    } else {
        // 5) Eks halda FALSE olacaq ve else isleyerek govdede ki, close() cagrilacaq MODAL pencere ucun.
        dialog.current.close()
    }
  

    return createPortal(
        // 3) REF parametri ile DIALOG variable-i arasinda link yaradiriq. 
        <dialog ref={dialog} > {children} </dialog>, // 6) open={open} -> Bunu silmeyi unutmayaq. Cunki OPEN parametrinden yox js-in showModal() funksiyasindan istifade ederek MODAL pencereni acmaga calisiriq.
        document.getElementById('modal')
    )   
}

// 7) Bizim kodumuz islemeyecek. Cunki, dialog.current geriye UNDEFINED qaytaracaq. Bunun sebebi ise MODAL pencereni acmaq ucun heleki BUTTON duymesini basmamis olmagimizdir.
// Duyme basilmadigi ucun ref={dialog} kodu CURRENT yəni hal-hazirda basildiqda islemeli olan DIALOG tag-ini elde etmir. Buna gore de yuxarida if icinde UNDEFINED olacaq. 