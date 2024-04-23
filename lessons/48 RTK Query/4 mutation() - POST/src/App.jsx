import { useCreatePostMutation, useGetPostByIdQuery } from "./redux/services/jsonplaceholder"

export default function App() {
  // const {data:post, error, isLoading} = useGetPostByIdQuery(2)

  // 4) useCreatePostMutation() hook-undan lazim olan action, mutation ve.s lazim olan butun elementleri elde ederek [createPost, {isLoading, isError, error}] variable-larina veririk. Bu elementler avtomatik lazim olan variable-a verilir.
  const [createPost, {isLoading, isError, error}] = useCreatePostMutation()
  console.log(isLoading, isError, error);


  // 2) e parametri EVENT-dir ve bu parametri icinden lazimli form elementlerini elde ederek deyerlerini variable-lara yerlesdiririk.
  const handleSubmit = async(e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    // 3) Elde etdiyimiz deyerleri OBJECT icine qoyaraq 'newPost' adli variable-la kocururuk.
    const newPost = {title, body}

    try {
      // 5) createPost() funksiyasina 'newPost' object-ini gonderirik.  
      // unwrap() metodu sorgu gonderilen zaman eger her sey yolunda gederse neticeni eger xeta bas vererse onda movcud sorgu ile bagli hansi xetanin bas verdiyini elde etmek ucun istifade edilir. 
      await createPost(newPost).unwrap();
      console.log('Post added');

    } catch (error) {
      console.log(error, 'Something is wrong');
    }
  }

  return (
    <div>
      Hello World!

      {/* {post && <p>{post.comment}</p>} */}

      {/* 1) Form elementimizi yaradiriq ve BUTTON kliklendikde handleSubmit() funksiyasi cagrilacaq. */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title"/>
        <textarea name="body" placeholder="Body"/>
        <button type="submit" disabled={isLoading}>Create Post</button>
      </form>

    </div>
  );
  
}