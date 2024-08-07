import {useAuth} from '../utils/AuthContext'
import { usePost } from "../Contexts/PostContext";
import conf from '../conf/conf'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { user } = useAuth();
  const { posts } = usePost();
  const navigate = useNavigate()

  const handleClick = (id) => {
    // if (user.$id === userId) {
    //   navigate(`/post/${id}`)
    // }
    navigate(`/post/${id}`)
  }

  return (
    <>
    {user ? 
      <section className="flex flex-col justify-center items-center my-4">
        <h1 className='text-2xl font-semibold '>Latest Posts</h1>
        <ul className='flex flex-wrap gap-4 my-2 '>
          {posts.map((post) => (
            <li key={post.$id}
            onClick={() => handleClick(post.$id)}
            className=' h-[20rem] w-[25rem] '
            >
              <div className="postCard bg-slate-300 cursor-pointer hover:shadow-lg flex flex-col justify-center items-center m-4 gap-2 min-h-[20rem] min-w-[25rem] border rounded-lg p-4">
                <strong>{post.title}</strong>
                <p className=' overflow-hidden '>{post.description}</p>
                <img src={`${conf.appwriteUrl}/storage/buckets/${conf.appwriteBucketId}/files/${post.fileId}/view?project=${conf.appwriteProjectId}`}
                  alt="photo" 
                  className='rounded-xl'
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
