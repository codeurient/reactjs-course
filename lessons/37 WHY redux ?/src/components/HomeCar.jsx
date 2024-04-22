import React from "react";

// 1) HOME.JSX componentinden gelen COUNTER stat-ini qebul edirik
export default function HomeCar ({counter}) {
    return (
        // 2) Burda ise ekrana yazdiririq 
        <div>{counter}</div>
    )  
}

// 3) Demeli ne etdik ? APP.JSX componentinde yaradtigimiz STATE-i HOMECAR.JSX componentinde gostermek ucun
// 1ci gonderdik HOME.JSX componentine ordanda HOMECAR.JSX componentine.

// 4) Indi tesevvur edin ki, 15 component var var 1ci componentden 15ci componente state gonderirik. 

// 5) REDUX istifade etdikde ise bu STATE-ler bir yerde yaradilir ve ortada hec bir artiq vasiteci olmadan 
// birbasa Ana component-den gonderilir istenilen componente.