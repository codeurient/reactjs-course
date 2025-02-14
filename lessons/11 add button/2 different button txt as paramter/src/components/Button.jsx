import './Button/Button.css'

// 1) Gonderilen parametrleri burda qebul ederik. Gonderilen parametr adı ile qebul edilen eyni olmalidir.
export default function Button({text}) {
    return <button className='button'>{text}</button> 
}