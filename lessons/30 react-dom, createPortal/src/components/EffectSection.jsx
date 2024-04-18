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
            </Modal>
        </section>
    )
}