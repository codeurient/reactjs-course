import './Button.css'

export default function Button({children, onClick, isActive}) {

    let classes = 'button'
    // 1) Eger isActive true olarsa classes deyiskenine active elave edirik.
    if(isActive) {
        classes += ' active';
    }

    return <button className={classes} onClick={onClick}> {children} </button> 

}