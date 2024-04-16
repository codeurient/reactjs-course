import Header from "./components/Header";
import Button from "./components/Button/Button";
import TeachingSection from "./components/TeachingSection";
import { useState } from "react";
import { differences } from "./data"; 

export default function App() {
  let [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

  return (
    <div>
      <Header/>
      <main>

        {/* 1) Section hisseni 'TeachingSection.jsx' faylina kocurduk. */}
        <TeachingSection/>

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