import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import {useEffect, useState} from "react";

export default function EffectSection() {
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);


    // 3) Bu kodda olan basqa bir xeta fetchUsers() funksiyasinin component icinde istifade edilmeyidir. Kod isleyir ancaq yenede sorgunu gonderen funksiyani component icinde yazmaq dogru deyil.
    // Baxmayaraq ki, bu fetchUsers() funksiyasi, component render edildikden sonra 1 defe cagrilir ancaq component her render edildikde fetchUsers() funksiyasi 1 defeden cox yaradilir. 
    async function fetchUsers() {
        setLoading(true);  
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
        const users  = await response.json();  
        setUsers(users) 
        setLoading(false);  
    }

    // 1) Eger funksiyani colde cagiracaq olsaq onda sonsuz dongu yanaranacaq ve xeta mesaji goreceyik. Cunki component yaradilir sonra fetchUsers() cagrilir sonra setLoading deyerini deyisir
    // bu fetchUsers funksiyasi ve component yeniden yaradilir ki, bu yeni deyisikliyi elde ede bilsin. Ve bu baslayir tekrarlanmaga. Yəni:
    // component cagrilir -> setLoading false olur -> fetchUsers cagrilir -> setLoading true olur -> component tezelden cagrilir ve.s dovur yaranir.
    // fetchUsers(); - kommenti acaraq xetani gormek olar.

    // 2) setLoading bir numunedir yəni tekce o yox digerleride tekrar-tekrar yeniden yaradilir ve render olunur.

    useEffect(() => {
        fetchUsers();
    }, [])

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