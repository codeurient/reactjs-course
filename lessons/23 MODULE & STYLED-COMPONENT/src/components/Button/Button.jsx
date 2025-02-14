// 1) classes bir obyektdir ve icinde bu duymeye aid css stilleri vardir. Bu duymeye aid css stilleri classes obyektinin adı ile el catandir. Basqa duyme ucun basqa ad vere 
// ve hemin basqa duymeye aid css stillerini basqa obyekt adı ile cagirib istifade ede bilerik. 
import classes from './Button.module.css'

export default function Button({children, onClick, isActive}) {

    // 2) Istifade etmek ucun ilk once obyektin adini sonra onun icinde CSS stilinin adini cagirmaliyiq.
    return <button className={isActive ? `${classes.button} ${classes.active}` : classes.button} onClick={onClick}> {children} </button> 

}