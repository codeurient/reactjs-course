// 1) RTK Query demek olar ki, REDUX Query ile eyni isi gorur. Bu her iki kitabxana Serverden API ile data cekmek ve onu idare etmek ucun istifade edilir.

// Redux Toolkit -de olan createAsyncThunk() funksiyasida serverden data elde etmek ucun istifade edilir ancaq sade prosedurlarda yaxsidi. Proyekt boyudukce, cekilen data-lar coxaldiqca
// createAsyncThunk() funkistyasi ile iş gormek cetinlesir ve yazilan kod RTK Query ile yazilana nisbeten daha boyuk daha cox olur. 

// RTK Query paketi Redux Toolkit icinde geldiyi ucun istifadesi de Redux Query-ye nisbeten daha rahatdir. Cunki Redux Query basqa bir kitabxanir ve onu qurasdirdiqdan sonra 2 ferqli
// sistemi bir birine uygunlasdirmaq kimi bezi prosedurlardan kecmek lazimdir. Ancaq RTK Query paketi Redux Toolkit kitabxanasinin bir parcasi oldugundan daha rahat istifade edilir.

// RTK Query hem REST API'ler hemde GraphQL kimi menbelerden data ceke bilir. 
// REDUX Query sadece  REST API'lerden data cekir.

// RTK Query getirdiyi data-lari CACHE yaddasda saxlayir ve 2ci muraciet etdikde artiq bazaya yox cache yaddasa muraciet ederek ordan data-ni getirir.
// REDUX Query-de bele bir sistem yoxdur.

// RTK Query cache yaddasi yenilemek ucun mueyyen araliqlarla servere sorgunu avtomatik gonderir ki, son deyisiklikleri yenide cache yaddasa yazsin
// REDUX Query-de bele bir sistem yoxdur.

export default function App() {

  return (
    <div>
      salam.
    </div>
  );
  
}