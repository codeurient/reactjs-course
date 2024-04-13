// 2) Funksiyanin colunde deyisken yaradaraq tairx elde etmek ucun olan kodumuzu yaza bilerik. 
const now = new Date();

export default function Header() {

  // 3) Hemin kodu funksiyanin icinde de yazmaq mumkundur.
  // const now = new Date();

  // 1) jsx faylinin icinde olduqda xususi bir qayda vardir ki, bu qaydadan istifade ederek js kodlarimizi yaza bilerik. Bu qaydadan istifade etmek ucun 
  // { } bezekli morterize yazmaq kifayetdir. Hemin simvollar arasinda yazilan yazilar koddur ancaq neticesi string kimi ekrana yazdirilir.
    return (
      <header>
          <h3>CODEURIENT</h3><br/>
  
          <span>Hesabla: { 21 + 21 } </span><br/>
          <span>Metn:    { 'hello'.toUpperCase() } </span><br/>
          <span>Time is now: { now.toLocaleTimeString() }</span>

      </header>
    )
}