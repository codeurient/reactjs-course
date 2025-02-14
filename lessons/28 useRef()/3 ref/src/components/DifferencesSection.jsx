import Button from "./Button/Button";
import { useState } from "react";
import { differences } from "../data"; 


export default function DifferencesSection() {

    let [contentType, setContentType] = useState(null)

    function handleClick(type) {
        setContentType(type)
    }

    return (
        <section>
            <h3>Moved by Elara's selfless act of kindness</h3>
            <Button isActive={contentType === 'way'} onClick={ () => handleClick('way') }>Home</Button>
            <Button isActive={contentType === 'easy'} onClick={ () => handleClick('easy') }>Blog</Button>
            <Button isActive={contentType === 'program'} onClick={ () => handleClick('program') }>About</Button>

            { !contentType && <p>Click the button!</p> }
            { contentType && <p>{differences[contentType]}</p> }
        </section>
    )
}