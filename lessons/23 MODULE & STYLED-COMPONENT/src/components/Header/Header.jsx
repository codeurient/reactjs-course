import { useState } from 'react';
import logo from '/logo-name.svg';
// 3) Kitabxanani endirdikden sonra IMPORT edirik. Bu kitabxanin icinde HTML tag-leri vardir. 
import { styled } from 'styled-components'
import './Header.css'

// 4) styled.header yazaraq HEADER tag-ini cagirirq sonra ise apastrof isareleri qoymaq lazimdir ki, bu isarelerin arasinda css kodlarini yerlesdirek. 
// Sonra ise hemin kodlari 'HeaderContainer' adinda deyisken yazaraq veririk bu deyiskene ki, component kimi istifade ede bilek. 
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  min-height: 60px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  padding: 0 2rem;
  background: #fafafa;
`
// 5) NOT: yuxarida styled yazdiqdan sonra header evezine div-de ve.s yazsaq olar. Sadece tag olaraq header evezine div isletmis olasiyiq.

export default function Header() {

    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1000)

    return (
      <HeaderContainer>
        <img src={logo} />

        <div>
          <span>Time is now: { now.toLocaleTimeString() }</span>
        </div>
      </HeaderContainer>
    )
}


// 1) MODULE -dan basqa bir metod daha vardir. Bunun ucun ise kitabxana endirmek lazimdir:    npm i styled-components

// 2) Bu kitabxana css stillerini JS kodlari icinde yazmaq ucun istifade edilir.