import './Button/Button.css'

export default function Button({children}) {

    // 2) funksiya adini ozumuz yaziriq yeni istdeyimiz ad yaza bilerik. 
    function handleClick() {
        console.log("button clicked");
    }

    // 3) Buda oxlu funksiya ile olan numunedir.
    const handleMouseEnter = () => console.log('Mouse enter');

    // 1) EVENT-lar elave etdikde REACT js-in xususi ON ile baslayan event-larindan istifade edilir. Bunlar js de olan normal event-lara
    // benzeselerde, onlardan ferqlidirler. Bir TAG-e birden cox event teyin etmek mumkundur. 
    return <button 
            className='button' 
            onClick={handleClick} 
            onMouseEnter={handleMouseEnter}
            onDoubleClick={ () => console.log('Double Clicked') }
            >
            {children}
            </button> 
    // 3) Funksiyalari react js de cagirdiqda onunde () yumru morterize qoymaq lazim deyildir.

    // 4) onDoubleClick={ () => console.log('Double Clicked') }   - Bele bir yazilis qaydasida movcuddur.
}