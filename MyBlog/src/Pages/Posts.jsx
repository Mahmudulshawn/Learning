import { useState } from "react";
import {useAuth} from '../utils/AuthContext'
import { usePost } from "../Contexts/PostContext";
import Input from '../Components/Input'
import Button from '../Components/Button'
import conf from '../conf/conf'



export default function Post() {
  const {user} = useAuth();
  const { posts, createPost, removePost } = usePost();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault()
    createPost({ userId:user.$id, title, description, file })
    setTitle('')
    setDescription('')
    setFile(null)
  }

  return (
    <>
    
      {/* Show the submit form to logged in users. */}
      {user ? (
        <section className="flex flex-col justify-center items-center rounded-xl p-4 border" >
          <h2>Submit Post</h2>
          <form className="flex flex-col justify-center items-center">
            <Input
              type="text"
              placeholder="Enter Title..."
              value={title}
              className="text-[1.3rem]"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <textarea
              placeholder="Description..."
              className="bg-gray-100 text-[1.2rem] min-h-[25rem] min-w-[30rem] p-2 text-black border border-black/10 rounded-xl outline-black/50 "
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <Input
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
            <Button
              type="button"
              className="mt-2"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </section>
      ) : (
        <section>
          <p>Please login to submit an post.</p>
        </section>
      )}

      {/* Show all the posts of the current user. */}
      <section className="flex flex-col justify-center items-center gap-4 border rounded-xl">
        <h1 className="mt-8">My Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.$id} className="m-4">

              {/* only showing the posts of the current user */}
              {user && user.$id === post.userId && (
                <div className="myPosts bg-slate-300 p-4 gap-3 shadow-lg flex flex-col justify-center items-center h-[20rem] w-full border rounded-lg overflow-hidden">
                  <strong>{post.title}</strong>
                  <p>{post.description}</p>
                  <img src={`${conf.appwriteUrl}/storage/buckets/${conf.appwriteBucketId}/files/${post.fileId}/view?project=${conf.appwriteProjectId}`}
                  alt="photo" 
                  style={{width: "100px", height: "100px"}}
                  />

                  {/* Show the remove button to post owner. */}
                  {user && user.$id === post.userId && (
                    <Button 
                    type="button" 
                    onClick={() => removePost(post.$id)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

    </>
  );
}
