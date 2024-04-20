import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import {useState} from "react";

// 1) BACKEND-e sorgu gondererek asinxron formada melumatlari nece elde ede bilerik ? Ilk once nece etmek olmaz buna baxaq. 

export default async function EffectSection() {
    const [modal, setModal] = useState(false);

    // 3) Bize fake server lazimdir bunun ucun istifade ede bileceyimiz sayt:   https://jsonplaceholder.typicode.com/users

    // a) Yuxarida ASYNC yaziriq, Sonra AWAIT yazaraq FETCH metodunu cagiririq ve.s bele etmek lazim deyil.
    // b) Cunki REACT mexanikasi ele qurulubdur ki, her defe STATE (useState) deyisdikde, component yeniden yaradilir, sonra render olunur ve.s
    // c) Bizde her defe fake servere REQUEST gondereceyimiz ucun BAN edileceyik ve artiq sorgu gondermek mumkun olmayacaq ve proqramimiz xarab olacaq.  
    await fetch('https://jsonplaceholder.typicode.com/users')

    return (
        <section>
            <h3>effect</h3>

            {/* 2) Yer acmaq ucun kodu qisaldaq. Bunun ucun yuaxrida funksiya var idi, hemin funksiyani event-a yazdiq. */}
            <Button onClick={() => { setModal(true) }}>Open information</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facilis recusandae deserunt doloribus at? Dolor animi qui ipsa facilis assumenda, repellat fugiat vel, deserunt iste esse libero dignissimos voluptate beatae a voluptatum temporibus. Accusantium quis, id quasi voluptates fuga sint.</p>

                <Button onClick={() => setModal(false)}>Close</Button>
            </Modal>
        </section>
    )
}