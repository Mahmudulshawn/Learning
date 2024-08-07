import React, {useEffect, useState} from 'react'
import { useAuth } from '../utils/AuthContext';
import { usePost } from '../Contexts/PostContext';
import Input from '../Components/Input'
import Button from '../Components/Button'
import conf from '../conf/conf'
import { useNavigate, useParams } from'react-router-dom'
import {storage} from '../AppwriteConfig'
import { ID } from 'appwrite';

function EditPost() {
    // const [post, setPost] = useState(null)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState();
    
    const { getPost, updatePost } = usePost()
    const { id } = useParams()
    const navigate = useNavigate()

    const fetchPost = async () => {
        const postResponse = await getPost(id);
        // setPost(post)
        setTitle(postResponse.title)
        setDescription(postResponse.description)
        setFile(postResponse.file)
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        const postInfo = { title, description };
        if (file) {
            const fileResponse = await storage.createFile(conf.appwriteBucketId, ID.unique(), file);
            postInfo.fileId = fileResponse.$id;
        }
        await updatePost(id, postInfo);
        navigate('/home')
    };

    useEffect(() => {
        fetchPost();
    }, [id, getPost])

    return (
        <section className="flex flex-col justify-center items-center rounded-xl p-4 border">
            <h2>Edit Post</h2>
            <form className="flex flex-col justify-center items-center">
                <Input
                    type="text"
                    placeholder="Enter Title..."
                    value={title}
                    className="text-[1.3rem]"
                    onChange={(event) => setTitle(event.target.value)}
                />
                <textarea
                    placeholder="Description..."
                    className="bg-gray-100 text-[1.2rem] min-h-[25rem] min-w-[30rem] p-2 text-black border border-black/10 rounded-xl outline-black/50 "
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <Input
                    type="file"
                    onChange={(event) => setFile(event.target.files[0])}
                />
                <Button
                    type="button"
                    className="mt-2"
                    onClick={handleUpdate}
                >
                    Update
                </Button>
            </form>
        </section>
    );
}

export default EditPost