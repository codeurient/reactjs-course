import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { ways, differences } from "./data"; 
import { useState } from "react";

export default function App() {
  let [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

  return (
    <div>
      <Header/>
      <main>
        <section>
          <h3>Lorem ipsum dolor sit.</h3>
          <ul>
            {ways.map((way, index) => (
              <WayToTeach key={index} {...way} />
            ))}
          </ul>
        </section>
        <section>
          <h3>Moved by Elara's selfless act of kindness</h3>
          <Button isActive={contentType === 'way'} onClick={ () => handleClick('way') }>Home</Button>
          <Button isActive={contentType === 'easy'} onClick={ () => handleClick('easy') }>Blog</Button>
          <Button isActive={contentType === 'program'} onClick={ () => handleClick('program') }>About</Button>

        { !contentType && <p>Click the button!</p> }
        { contentType && <p>{differences[contentType]}</p> }

        </section>
      </main>
    </div>
  )
}