import Header from "./components/Header";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { useState } from 'react';
import { ways } from "./data";

export default function App() {
  let content = "Click the button";  

  function handleClick(type) {
    console.log("button clicked", type);
    content = type;  
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
          <Button onClick={ () => handleClick('way') }>Home</Button>
          <Button onClick={ () => handleClick('easy') }>Blog</Button>
          <Button onClick={ () => handleClick('program') }>About</Button>

          <p>{content}</p>
          
        </section>
      </main>
    </div>
  )
}