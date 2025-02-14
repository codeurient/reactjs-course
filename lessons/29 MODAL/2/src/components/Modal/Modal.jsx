import './Modal.css'

// 2) EffectSection.jsx faylindan gonderilen TRUE yaxud FALSE deyerlerini OPEN parametri ile qebul ederek OPEN atributuna veririk. 
export default function Modal({children, open}) {
    // 1) dialog tag-inin OPEN atributu modal pencereni acmaq ucun istifade edilir.
    return <dialog open={open}> {children} </dialog>

}