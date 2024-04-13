// 1) public qovlugundan "logo-name.svg" seklini 'logo' adı ile İMPORT edirik. Hemin sekli funksiya icinde istifade etmek ucun yene { } istifade etmeliyik.
// Normal html-de oldugu kimi cagira bilmerik. Cunki, funksiya icinde react qaydalarindan istifade etmeliyik.
import logo from '/logo-name.svg';
// 3) Yolu bu formada da qeyd etmek olardi: ('../../public/logo-name.svg')  ancaq React js-de mutleq yol yəni ('/logo-name.svg') bu forma yazilis qaydasida
// dogrudur. Cunki public icinde olan fayllar serverde hec bir vasite olmadan bilavasite el catandirlar.

export default function Header() {
    const now = new Date();
    const name = 'Result';

    return (
      <header>
        {/* 
            2) funksiya icinde kommentler de { } simvollari arasinda yazilir.  Asagida bezekli morterize icinde IMPORT edilen seklin adini yaziriq.
                Normal IMG tag-lerinin yazilis formasindan ferqlidir: src="logo" - bele olmaz.
        */}
        <img src={logo} alt={name} />
        {/* 
            4) ALT atributunun icinde ise normal html de oldugu kimi stringler yaza bilerik:                     <img src={logo} alt="result"   />
            5) Eger deyisken yaradaraq, stringi deyiskene vererikse onda { } bezekli morterize ile yazmaliyiq:   <img src={logo} alt={name}     />
            6) Yaxud bu cur yazmaqda olar:                                                                       <img src={logo} alt={"Result"} />
        */}

        <div>
          <span>Time is now: { now.toLocaleTimeString() }</span>
        </div>
      </header>
    )
}