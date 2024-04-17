import { useState } from 'react';
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