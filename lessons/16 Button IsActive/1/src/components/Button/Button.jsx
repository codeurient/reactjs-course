import './Button.css'

export default function Button({children, onClick, isActive}) {
    // 1) App.jsx-dan, isActive parametri ile gonderilen deyeri Button.jsx faylinda elde ederek sorgu yaradiriq. 
    return <button className={isActive ? 'button active' : 'button'} onClick={onClick}> {children} </button> 

}