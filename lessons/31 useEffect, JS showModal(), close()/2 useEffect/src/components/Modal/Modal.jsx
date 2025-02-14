import {createPortal} from 'react-dom'
// 1) useEffect component yaxud hook icinde istifade edilen hook-dur. Niye IMPORT etdik? 
import { useRef, useEffect } from "react";
import './Modal.css'

export default function Modal({children, open}) {
    const dialog = useRef()

    // 2) Bu funksiya 2 parametr qebul edir. 1cisi CALLBACK, 2cisi [] ARRAY.     1ci parametr avtomtik olaraq cagrilir, 2ci parametr ise 1ci parametrin nelerden asili olaraq isleyeceyini bildir.
    useEffect(() => {
    // 3) useEffect() funksiyasi kodun ardicilligini gozlemek ucun istifade edilen hook-dur. Mueyyen tapsirigi, useEffect() hook-u ile qeydiyyata saliriq. Bu hook o vaxt isleyir ki, Modal adlı COMPONENT-imiz islemeye baslasin
    // ve her seyi render etsin bitirsin. MODAL adlı component render edene qeder useEffect() hook-u islemediyinden, bu hook-un 1ci parametrinde olan funksiya cagrilmir. Cagrilmadigi ucunde mentiqle 'dialog.current' hissesi 
    // işləmir və bunun üçündə xəta almırıq. 
        if(open) {
            dialog.current.showModal()
        } else {
            dialog.current.close()
        }
    }, [open]); // 4) 2ci parametrde qeyd etmek lazimdir ki, hansi effect bas verdikde 1ci parametr islesin.  OPEN ise duyme kliklendikde MODAL componentin aldigi parametrdir. Yəni, deyisen hemin OPEN parametridir.

    return createPortal(
        <dialog ref={dialog}> {children} </dialog>,
        document.getElementById('modal')
    )   
}