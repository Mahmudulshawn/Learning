import {useAuth} from '../utils/AuthContext'
import { usePost } from "../Contexts/PostContext";
import conf from '../conf/conf'

export default function Home() {
  const { user } = useAuth();
  const { posts } = usePost();

  // console.log(user.$id)
  // console.log(posts.userId)


  return (
    <>
    {user ? 
      <section className="flex flex-col justify-center items-center my-4 gap-4">
        <h1 className='text-2xl font-semibold '>Latest Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.$id} >
              <div className="postCard bg-slate-300 shadow-lg flex flex-col justify-center items-center m-4 min-h-[20rem] w-full border rounded-lg p-4 overflow-hidden">
                <strong>{post.title}</strong>
                <p>{post.description}</p>
                <img src={`${conf.appwriteUrl}/storage/buckets/${conf.appwriteBucketId}/files/${post.fileId}/view?project=${conf.appwriteProjectId}`}
                  alt="photo" 
                  style={{width: "100px", height: "100px"}}
                  />
              </div>
            </li>
          ))}
        </ul>
      </section>
    : null}
      
    </>
  );
}
