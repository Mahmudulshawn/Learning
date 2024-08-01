import { useState } from "react";
import {useAuth} from '../utils/AuthContext'
import { usePost } from "../Contexts/PostContext";
import Input from '../Components/Input'
import Button from '../Components/Button'
export default function Post() {
  const {user} = useAuth();
  const { posts, createPost, removePost } = usePost();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault()
    createPost({ userId:user.$id, title, description })
    setTitle('')
    setDescription('')
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
              placeholder="Title"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <Button
              type="button"
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
      <section className="flex flex-col justify-center items-center gap-4 border rounded-xl p-4">
        <h2 className="mt-8">Latest Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.$id} className="flex flex-col justify-center items-center m-4">
              <strong>{post.title}</strong>
              <p>{post.description}</p>
              {/* Show the remove button to post owner. */}
              {user && user.$id === post.userId && (
                <Button type="button" onClick={() => removePost(post.$id)}>
                  Remove
                </Button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
