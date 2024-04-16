import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {

  return (
    <section style={{marginBottom: '1rem'}}>

        {/* 
        
            1) App.jsx-da qeyd etdiyimiz kimi, onChange parametri icinde bir funksiya yazmisik deye 'TabsSection.jsx' faylinda hemin funksiyani o parametr adı ile qeyd edirik.
        
            Bu funksiya o vaxt cagrilacaqdir ki, biz BUTTON-i klikleyek. Burda yazdigimiz onClick parametride ozumuzun verdiyi addir. Istediyimiz adi yaza bilerdik. 

            Ancaq Button.jsx faylinda olan onClick ise normal bildiyimiz event-dir.
        */}
        <Button isActive={active === 'main'}      onClick={() => onChange('main')}      >Home</Button>
        <Button isActive={active === 'feedback'}  onClick={() => onChange('feedback')}  >Feedback</Button>
        
    </section>
  )
}