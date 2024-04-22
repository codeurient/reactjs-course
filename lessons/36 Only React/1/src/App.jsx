import { useState } from "react";
import Home from "./pages/Home";

export default function App() {
  const [counter, setCounter] = useState(0)

  const decrement = () => {
    setCounter(counter - 1)
  }
  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <span onClick={decrement}> - </span>
      <Home counter={counter}/>
      <span onClick={increment}> + </span>
    </div>
  );
}