import { useState } from "react";
import Home from "./pages/Home";

export default function App() {
  // 1) STATE yaradiriq
  const [counter, setCounter] = useState(0)

  // 2) azaltmaq isini gorecek funksiyani yaradiriq
  const decrement = () => {
    setCounter(counter - 1)
  }
  // 2) artirmaq isini gorecek funksiyani yaradiriq
  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <span onClick={decrement}> - </span>
      {/* HOME.JSX componentini cagirirq ve COUNTER state-ini gonderirik hemin componente */}
      <Home counter={counter}/>
      <span onClick={increment}> + </span>
    </div>
  );
}