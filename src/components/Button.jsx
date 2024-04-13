// 5) INDEX.CSS faylinda olan siteller umumidir. Ancaq isteye uygun olaraq CSS stillerini izolyasiya ede bilerik. Yəni, duyme ucun ayrica css fayli yaradaraq ona aid stilleri
// hemin faylda yerlesdirmek olar. Sonra ise hemin componentin oldugu fayli css faylini IMPORT etmeliyik.
import './Button.css'

export default function Button() {
    // 1) bir setrde yazildiqda bezekli morterizeni buraxmaq olar.
    return <button className='button'>Click</button> 
    // 6) React js-de class tag-leri className kimi yazilir, cunki CLASS sozu js terefinden mesgul edilmisdir.
    // bizde js-de tag-leri yazdigimiz ucun CLASS acar sozunu istifade ede bilmerik.  
}


// 2) Dogrudur:   
// return (<button>Click</button>)



// 3) Dogrudur: 
// return (
//     <button>Click</button
// )



// 4) Dogru deyildir:
// return 
// (
//     <button>Click</button
// )
