import {useAuth} from '../utils/AuthContext'
import { usePost } from "../Contexts/PostContext";


export default function Home() {
  const { user } = useAuth();
  const { posts } = usePost();

  return (
    <>
    {user ? 
      <section className="flex flex-col justify-center items-center gap-4 border rounded-xl p-4">
        <h1>Latest Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.$id} >
              {/* <h1>Post By: {user.name}</h1> */}
              <div className="postCard bg-slate-300 shadow-lg flex flex-col justify-center items-center m-4 min-h-[20rem] min-w-[25rem] border rounded-lg p-4 overflow-hidden">
                <strong>{post.title}</strong>
                <p>{post.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    : null}
      
    </>
  );
}
