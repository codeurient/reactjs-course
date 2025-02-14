import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import {useState} from "react";

export default function EffectSection() {
    const [modal, setModal] = useState(false);

    function openModal() {
        setModal(true);
    }

    return (
        <section>
            <h3>effect</h3>

            <Button onClick={openModal}>Open information</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facilis recusandae deserunt doloribus at? Dolor animi qui ipsa facilis assumenda, repellat fugiat vel, deserunt iste esse libero dignissimos voluptate beatae a voluptatum temporibus. Accusantium quis, id quasi voluptates fuga sint.</p>

                {/* 1) Bu duyme kliklendikde MODAL variable-sinin deyeri FALSE olacaq ve OPEN parametri ile hemin FALSE deyerini MODAL.jsx faylina gondereceyik. */}
                <Button onClick={() => setModal(false)}>Close</Button>
            </Modal>
        </section>
    )
}

// 2) Belelikle: OPEN: true olduqda js-in showModal() funksiyasi cagrilacaq, OPEN: false olduqda close() funksiyasi cagrilacaq. Hemin kodlarin islemesi ucun ise ardicilligi gozlemek lazimdir.
// Ardicilligi gozlemek ucun ise useEffect hook-undan istifade etmisik. 

// 3) useEffect olmasa idi kodlar yuxaridan-asagi sira ile oxunacaqdi. useEffect olduqda ise COMPONENT-de bir effect abs verene qeder gozluyub effect bas verdikden sonra hemin hook-un 1ci 
// parametrinde olan funksiya cagrilir.