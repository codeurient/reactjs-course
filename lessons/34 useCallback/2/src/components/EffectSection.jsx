import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import {useEffect, useState, useCallback} from "react";

export default function EffectSection() {
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback( async () => {
        setLoading(true);  
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
        const users  = await response.json();  
        setUsers(users) 
        setLoading(false); 
    }, [])

    useEffect(() => {
        fetchUsers();
        // 1) Kvadrat morterize icinde funkisyani yeniden cagirmaq o menaya gelir ki, eger birden fetchUsers() funksiyasinda her hansisa bir deyisiklik olarsa useEffect() hook-u yeniden cagrilsin
        // ve fetchUsers() tekrar istifade edile bilsin hemin yeniliklernen birlikde. Hal-hazirda hec bir deyisiklik yoxdur onun ucun hele bele yazmis sayiliriq. Ama olma ehtimalini nezere alaraq 
        // yazmaq praktikada yaxsi qebul olunan bir qaydadir.
    }, [fetchUsers])


    return (
        <section>
            <h3>effect</h3>

            <Button style={{marginBottom: '1rem'}} onClick={() => { setModal(true) }}>Open information</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facilis recusandae deserunt doloribus at? Dolor animi qui ipsa facilis assumenda, repellat fugiat vel, deserunt iste esse libero dignissimos voluptate beatae a voluptatum temporibus. Accusantium quis, id quasi voluptates fuga sint.</p>

                <Button onClick={() => setModal(false)}>Close</Button>
            </Modal>

            {loading && <p>Loading...</p>}

            {!loading &&  <ul>  {  users.map((user) => (<li key={user.id}>{user.name}</li>))  } </ul> }
        </section>
    )
}