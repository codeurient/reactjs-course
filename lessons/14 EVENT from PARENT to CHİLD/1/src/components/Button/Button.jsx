import './Button.css'

// Button() icinde yazilan 'children', 'onClick' ozumuzun qoydugu adlardir. Burda parametr kimi istediyimiz addan istifade ede bilerik. 
export default function Button({children, onClick}) {

    return <button className='button' onClick={onClick}> {children} </button> 

}