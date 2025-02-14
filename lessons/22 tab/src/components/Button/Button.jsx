import './Button.css'

export default function Button({children, onClick, isActive}) {

    // 1) Kliklenen duymeden asili olaraq burda olan onClick parametri ferqli deyerler qebul edir: Button({children, onClick, isActive})
    return <button className={isActive ? 'button active' : 'button'} onClick={onClick}> {children} </button> 

}