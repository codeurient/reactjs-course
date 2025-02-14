import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import {useEffect, useState} from "react";

export default function EffectSection() {
    const [modal, setModal] = useState(false);
    // 2) 2 dene STATE elave edirik. 1ci STATE LOADING deyilen mesaji gostermek ucun istifade edilecek. 2ci STATE backend-den gelen melumatlari ehtiva etmek ucun. 
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    // 3) Funksiya yaradiriq hansi ki, bu funksiya backend-den melumari elde edir. 
    async function fetchUsers() {
        setLoading(true);   // 4) Funksiya cagrildiqda 'setLoading()' state-i 'loading' variable-inin deyerini TRUE edir ki, melumatlar yuklenene qeder ekranda 'Loading...' deye bir mesaj gorek. 

        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // 5) fetch() metodu ile saytdan melumatlari getiririk.
        const users  = await response.json();   // 6) json() metodu ile elde edilen melumatlari json formatina ceviririk. ARRAY ve onun icinde OBJECT kimi olacaqdir bu melumatlar.
        setUsers(users) // 7) setUsers() state-i ile hemin array-i 'USERS' adli variable icinde qoyuruq.

        setLoading(false);  //  8) Butun melumatlar yuklendikden sonra 'LOADING' variable-inin deyerini FALSE edirik.
    }

    // 11) fetchUsers() funksiyasini cagirmaq ucun en yaxsi qayda useEffect() istifade etmekdir. Niye useEffect() istifade etdik ? Cunki component render olunduqda sonra fetchUsers() funksiyasini cagirmaq isteyirik.
    // Eger useEffect olmasa idi component ile fetchUsers() eyni vaxtda cagrilacaqdi.
    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <section>
            <h3>effect</h3>

            {/* 1) Yer acmaq ucun kodu qisaldaq. Bunun ucun yuaxrida funksiya var idi, hemin funksiyani event-a yazdiq. */}
            <Button style={{marginBottom: '1rem'}} onClick={() => { setModal(true) }}>Open information</Button>

            <Modal open={modal}>
                <h3>Hello from modal</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem facilis recusandae deserunt doloribus at? Dolor animi qui ipsa facilis assumenda, repellat fugiat vel, deserunt iste esse libero dignissimos voluptate beatae a voluptatum temporibus. Accusantium quis, id quasi voluptates fuga sint.</p>

                <Button onClick={() => setModal(false)}>Close</Button>
            </Modal>

            {/* 9) Eger melumatlar heleki yuklenmeyibse LOADING... deye bir mesaj gosteririk ekranda */}
            {loading && <p>Loading...</p>}

            {/* 10) Melumatlar yuklendikden sonra hemin melumatlari USERS variable-indan elde edirik. */}
            {!loading && 
            <ul>
               {  users.map((user) => (<li key={user.id}>{user.name}</li>))  }
            </ul>
            }
        </section>
    )
}