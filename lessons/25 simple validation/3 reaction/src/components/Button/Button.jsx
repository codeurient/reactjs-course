import classes from './Button.module.css'

export default function Button({children, isActive, ... props}) {

    // 1) 'FeedbackSection.jsx' faylindan gonderilen hem parametri hemde onun deyerini PROPS qebul edir. 
    
    // Evvel diger fayldan component icinde yazilaraq gonderilen parametrin adının ne olmasi ehemiyyet dasimirdi, indi ise component-de yazan ad gerek html tag-inin atribut ve.s adlari
    // ile eyni olsun.
    return <button className={isActive ? `${classes.button} ${classes.active}` : classes.button} {... props}> {children} </button> 

}