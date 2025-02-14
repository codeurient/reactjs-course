import './Button/Button.css'

// 1) Gonderilen parametrleri burda qebul ederik. Gonderilen parametr adı ile qebul edilen eyni olmalidir. Bu qayda parametrlerin 
// gonderilmesinin ve qebul edilmesinin basqa qaydasidir.
export default function Button({children}) {
    return <button className='button'>{children}</button> 
}