import { useGetPostByIdQuery } from "./redux/services/jsonplaceholder"


export default function App() {

  // 1) useGetPostByIdQuery() HOOK-unu cagirdiqda bu o demekdir ki, createApi() ile elde etdiyimiz datalar artiq APP.JSX faylinda istifade edile biler. Bize gelen datalarin arasinda DATA adli bir xasse var.
  // Bu cur de yazmaq olar:   const {data, error, isLoading} = useGetPostByIdQuery(2)
  // Bu cur de yazmaq olar:   const {data:post, error, isLoading} = useGetPostByIdQuery(2)        _____Bele yazdiqda data xassesinin deyerlerini POST adı ile elde edirik.
  const {data:post, error, isLoading} = useGetPostByIdQuery(2)


  return (
    <div>
      Hello World!

      {/* 2) POST yazaraq yeni bele bir daata mevcuddursa ve POST.COMMENT bele bir sahe movcuddursa onda ekrana yazdir deyirik. Ancaq mentiqnen {<p>{post.comment}</p>}  bu cur yazdiqda da islemeli idi ancaq islemirse
      bunun sebebi RTK QUERY ile data elde etdikde avtomatik olaraq DATA-lar yuklenene qeder LOADING emeliyyatinin getmesidir ve LOADING getdiyi muddetce POST yoxdur yaxud undefined-dir. Onun ucun xeta aliriq.
      Xeta almamaq ucun ise asagidaki kimi yaziriq ki, POST undefined olarsa onda FALSE qayitsin ve xeta mesajini gormeyek. DATA-lar yuklendikden sonra POTS true olacaq ve xeta mesaji almadan neticeni ekrana yazdira bileceyik. */}
      {post && <p>{post.comment}</p>}
    </div>
  );
  
}