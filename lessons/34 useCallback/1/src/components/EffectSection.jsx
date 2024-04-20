import Button from "./Button/Button";
import Modal from "./Modal/Modal";
// 1) Ikinci variant daha genis izah teleb eden variantdir. Bu variantda useCallback hook-undan istifade edeceyik. Ancaq gelin ilk once asagi nezer yetirek: 
//! JS de bele bir sey var: 
// const a = {a: 1}
// const b = {a: 1}
// a === b dedikde FALSE elde edirik baxmayaraq ki, her iki obyektin xasse ve deyerleri eynidir. Cunki JS-in yaddasinda ferqli obyektler ferqli yerlerde yerlesirler. Obyekt yaradildiqda 
// bu a ve b variable-lari eslinde obyektin ozunu ehtiva etmir. Hemin obyekte geden yolu ehtiva edir. Yaddasda ferqli yerlerde yerlesen obyektlere geden linkde (yolda) ferqli oldugu ucun 
// FALSE deyerini qaytarir proqram bize.
import {useEffect, useState, useCallback} from "react";

// 2) useCallback: Dedik ki, eger fetchUsers() funksiyasi 33-3 nomreli qovluqda oldugu kimi istifadə edilsə, onda component her yeniden formalasdiqda fetchUsers() funksiyasida tekrar-tekrar yaradilacaq.
// Bunun olmamasi ucun react js-de MEMOIZATION (yadda saxlama, cache (keş)) deyilen bir mexanizim vardir hansi ki, bu mexanizim funksiyalarin neticelerini keş yaddasa yerleşdirmək üçün istifadə edilir.
// Keş yaddaşa həkk olunan funksiya artıq yenidən yaradılmadan keş yaddaşdan çağrılaraq istifadə ediləcəkdir. Beləliklə funksiyalarin keşlənməsi üçün useCallback hook-undan istifadə edilir.
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