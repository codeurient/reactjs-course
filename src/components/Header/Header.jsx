import { useState } from 'react';
import logo from '/logo-name.svg';
import './Header.css'

export default function Header() {

    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1000)

    return (
      <header>
        <img src={logo} />

        <div>
          <span>Time is now: { now.toLocaleTimeString() }</span>
        </div>
      </header>
    )
}


// 1) MODULE -dan basqa bir metod daha vardir. Bunun ucun ise kitabxana endirmek lazimdir:    npm i styled-components

