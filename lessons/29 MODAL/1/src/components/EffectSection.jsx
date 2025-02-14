import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {

    function openModal() {

    }

    return (
        <section>
            <h3>effect</h3>

            {/* 1) Bu duymeni MODAL pencereni acmaq ucun istifade edirik. */}
            <Button onClick={openModal}>Open information</Button>

            {/* 2) Modal pencereni IMPORT edirik sonra asagida ki, kimi Mezmun yaziriq ve bu mezmun MODAL.JSX faylinin icinde olan CHILDREN parametrine gonderilir. */}
            <Modal>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facilis recusandae deserunt doloribus at? Dolor animi qui ipsa facilis assumenda, repellat fugiat vel, deserunt iste esse libero dignissimos voluptate beatae a voluptatum temporibus. Accusantium quis, id quasi voluptates fuga sint.</p>
            </Modal>
        </section>
    )
}