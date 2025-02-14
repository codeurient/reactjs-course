import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import {useEffect, useState, useCallback} from "react";
// 2)
import  useInput  from "../Hooks/useInput";

export default function EffectSection() {
    // 3) useInput() funksiyasi obyektdir. Hemin obyekti 'customInput' adlı özümüz yaradan variable-a veririk. 
    const customInput = useInput()

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

            {/* 1) INPUT tag-i elave etdik. */}
            {!loading && 
                ( 
                    <>
                    {/* 4) Bele yazmaq olardi:              <input type="text" className="control" value={customInput.value} onChange={customInput.onChange} /> 
                           Test meqsedli yazib yoxlayaq:    <input type="text" className="control" onChange={(event) => console.log(event.target.value)}     />    Input-a daxil edilen deyer console-a yazdirlir.

                    Biz daha da qisa olsun deye asagidaki kimi yaziriq. Asagidaki kimi yazdiqda ise artiq her 2 terefde manual elave etmeye ehtiyac qalmayacaq. useInput.js de elave edilen avtomatik olaraq seperator terefinden qebul 
                    edilib 'EffectSection.jsx' faylinda lazimli yere yazilacaq. */}
                        <input type="text" className="control" {...customInput}/>

{/* 5) <input type="text" className="control" {...customInput}/>         Bu yazilis formasinin acilisi beledir:   //! <input type="text" className="control" value={value} onChange={(event) => setValue(event.target.value)}/>
setValue() funksiyasi, INPUT sahesinde daxil edilen deyeri gorur ve oturur VALUE variable-ina. VALUE variable-i ise hemin deyeri gonderir VALUE xassesine. Funksiya ise hemin VALUE xassesini RETURN edir ve bizde neticeni goruruk  */}
{/* <h2>{customInput.value}</h2> */}

                        <ul>  {  users.map((user) => (<li key={user.id}>{user.name}</li>))  } </ul>
                    </>
                )
            }
        </section>
    )
}