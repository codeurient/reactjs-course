import { useEffect, useState } from 'react';
import logo from '/logo-name.svg';
import { styled } from 'styled-components'
import './Header.css'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  min-height: 60px;
  border-bottom: 1px solid #ccc;
  align-items: center;
  padding: 0 2rem;
  background: #fafafa;
`

export default function Header() {
  const [now, setNow] = useState(new Date())

  // 1) header hissede daima isleyen bir saat var. Ele tesevvur edek ki, TAB sistemi ile basqa sehifeye kecid etdikde header yoxa cixir ancaq vaxt dayanmayacaq ve islemeye devam edecek.
  // Vaxt isledikce yaddasda yer tutacaq. Eger header yoxdursa vaxt islememelidir. Ne vax ki, header olan hisseye geri qayidariq onda islemeye devam eder. Vaxti dayandirmaq ucun useEffect istifade 
  // ede bilerik. useEffect o vaxt isleyir ki, bir effect, hereket bas versin. Bu hereket ise HEADER-in gizlenmesi olacaq. 
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)

    // 2) HEADER hissede effect bas veren kimi useEffect() hook-u funksiya RETURN ederek clearInterval() metodu vasitesi ile setInterval()-i dayandiracaq.
    return () => {
      clearInterval(interval)
      console.log('Cleaning....');
    }
  }, [])


    

    return (
      <HeaderContainer>
        <img src={logo} />

        <div>
          <span>Time is now: { now.toLocaleTimeString() }</span>
        </div>
      </HeaderContainer>
    )
}