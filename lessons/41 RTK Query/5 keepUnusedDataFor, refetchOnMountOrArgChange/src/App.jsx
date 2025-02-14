import { useCreatePostMutation, useGetPostByIdQuery } from "./redux/services/jsonplaceholder"

export default function App() {
  // const {data:post, error, isLoading} = useGetPostByIdQuery(2)

  const [createPost, {isLoading, isError, error}] = useCreatePostMutation()
  console.log(isLoading, isError, error);


  const handleSubmit = async(e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const newPost = {title, body}

    try {
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

      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title"/>
        <textarea name="body" placeholder="Body"/>
        <button type="submit" disabled={isLoading}>Create Post</button>
      </form>

    </div>
  );
  
}