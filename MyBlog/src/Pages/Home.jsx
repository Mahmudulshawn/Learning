import { useState } from "react";
import {useAuth} from '../utils/AuthContext'
import { usePost } from "../Contexts/PostContext";
import Input from '../Components/Input'
import Button from '../Components/Button'
export default function Home() {
  const {user} = useAuth();
  const { posts } = usePost();

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-4 border rounded-xl p-4">
        <h2>Latest Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.$id} className="flex flex-col justify-center items-center m-4">
              <strong>{post.title}</strong>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
